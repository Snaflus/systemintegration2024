import express from "express";

const app = express();

app.use(express.static("public"));

const PORT = 8080;

const randomNumbers = [1, 25, 50];
app.get("/randomNumbers", (req, res) => {
  res.send({ data: randomNumbers });
});

app.get("/simulateNewRandomNumbers", (req, res) => {
  randomNumbers.push(getRandomInt(1, 100));
  res.send("OK");
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
