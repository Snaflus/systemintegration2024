import { LoadPersonFrom } from "./LoadPersonFrom";
import { Person, PersonToString } from "./Person";
import express, { Express, Request, Response } from "express";

// let personJson: Person = LoadPersonFrom.Json("..\\02_Data\\me.json");
// let personYaml: Person = LoadPersonFrom.Yaml("..\\02_Data\\me.yaml");
// let personCsv: Person = LoadPersonFrom.Csv("..\\02_Data\\me.csv");
// let personXml: Person = LoadPersonFrom.Xml("..\\02_Data\\me.xml");

const app: Express = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/one", (req: Request, res: Response) => {
  res.send("test");
});

app.get("/two", (req: Request, res: Response) => {
  res.send("test2");
});
