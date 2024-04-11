import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));

import multer from "multer";
//const upload = multer({ dest: "./uploads" });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    console.log(req);
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniquePrefix + "__" + file.originalname);
  },
});

function fileFilter(req, file, cb) {
  const allowedTypes = ["image/png", "image/svg"];

  if (!allowedTypes.includes(file.mimetype)) {
    cb(new Error("Only PNG and SVG images are allowed"), false);
  } else {
    cb(null, true);
  }
}

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
  },
  fileFilter,
});

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

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
