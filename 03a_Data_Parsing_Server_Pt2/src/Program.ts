import { LoadPersonFrom } from "./LoadPersonFrom";
import { Person, PersonToString } from "./Person";

let personJson: Person = LoadPersonFrom.Json("..\\02_Data\\me.json");
console.log("JSON::: " + PersonToString(personJson));

let personYaml: Person = LoadPersonFrom.Yaml("..\\02_Data\\me.yaml");
console.log("YAML::: " + PersonToString(personYaml));

let personCsv: Person = LoadPersonFrom.Csv("..\\02_Data\\me.csv");
console.log("CSV::: " + PersonToString(personCsv));

let personXml: Person = LoadPersonFrom.Xml("..\\02_Data\\me.xml");
console.log("XML::: " + PersonToString(personXml));
