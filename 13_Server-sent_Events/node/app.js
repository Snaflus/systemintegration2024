import express from "express";
const app = express();

app.use(express.static("public"));

app.get("/synchronize-time", async (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  setInterval(() => {
    sendTimeToClient(res);
  }, 1000);
});

function sendTimeToClient(res) {
  const time = new Date().toISOString();
  return res.write(`data: ${new Date().toLocaleTimeString()}\n\n`);
}

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
