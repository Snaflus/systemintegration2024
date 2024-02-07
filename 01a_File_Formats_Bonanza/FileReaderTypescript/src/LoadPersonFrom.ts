import { readFileSync } from 'fs';
import { Person } from './Person';
import YAML from 'yaml'
import * as CSV from 'csv-string';
var parseString = require('xml2js').parseString;

export class LoadPersonFrom {
    // module in use runs an async pipe which creates seemingly unsolvable problem
    // static Xml(fileLocation: string): any {
    //     let jsonData;
    //     var data = readFileSync(fileLocation, 'utf8');
    //     parseString(data, function (err: any, result: any) {
    //         console.log(result.me);
    //         return result.me as Person;
    //     })
    // }

    static Csv(fileLocation: string): Person {
        var data = readFileSync(fileLocation, 'utf8');

        let row = CSV.parse(data)[1]

        //static solution written by hand
        let rData: Person = {
            name: row[0],
            age: Number(row[1]),
            hobbies: row[2].split(",")
        }

        return rData as Person;
    }

    static Yaml(fileLocation: string): Person {
        var data = readFileSync(fileLocation, 'utf8');
        return YAML.parse(data) as Person;
    }

    static Json(fileLocation: string): Person {
        var data = readFileSync(fileLocation, 'utf8');
        return JSON.parse(data) as Person
    }
}