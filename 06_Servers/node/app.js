import express from 'express';

const app = express();

const dataHere = [];

app.get("/", (req, res) => {
    res.send({ message: "Hello" })
});

app.get("/otherRoute", (req, res) => {
    dataHere.push("OK");
    console.log(dataHere[dataHere.length-1])
    res.send({ message: "Other hello" })
});

app.post("/postRequest", (req, res) => {
    res.send({ message: "Post request" })
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));