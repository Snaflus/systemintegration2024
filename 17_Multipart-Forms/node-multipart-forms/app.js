import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));

import multer from "multer";
const upload = multer({ dest: "./uploads" });

app.post("/form", (req, res) => {
  console.log(req.body);
  delete req.body.password;
  res.send(req.body);
});

app.post("/fileform", upload.single("file"), (req, res) => {
  console.log(req.body);
  console.log(req.files);
  res.send({});
});

const PORT = process.env.PORT ?? 8090;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
