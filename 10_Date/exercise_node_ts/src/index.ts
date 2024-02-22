import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/date", async (req: Request, res: Response) => {
  const date = new Date();
  res.send(date);
});
