import express from "express";

const app = express();

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/requestFastAPI", async (req, res) => {
  const response = await fetch("http://localhost:8000/fastapiData");
  const result = await response.json();
  res.send({ data: result });
});

app.get("/expressData", async (req, res) => {
  res.send({ data: "isRunning" });
});
