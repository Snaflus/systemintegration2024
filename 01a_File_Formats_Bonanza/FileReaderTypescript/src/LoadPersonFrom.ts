import { readFileSync } from 'fs';
import { Person } from './Person';
import YAML from 'yaml'

export class LoadPersonFrom {
    // static Xml(fileLocation: string): Person {
    //     let jsonData;
    //     var data = readFileSync(fileLocation, 'utf8');
    //     parseString(data, function(err, result){
    //         jsonData = result;
    //     })
    //     console.log(jsonData);
    //     jsonData = JSON.stringify(jsonData)        
    //     console.log(jsonData);
    //     return jsonData as Person
    // }

    // static Csv(fileLocation: string): Person {
    //     var data = readFileSync(fileLocation, 'utf8');        
    //     return CSV.parse(data) as Person
    // }

    static Yaml(fileLocation: string): Person {
        var data = readFileSync(fileLocation, 'utf8');
        return YAML.parse(data) as Person;
    }

    static Json(fileLocation: string): Person {
        var data = readFileSync(fileLocation, 'utf8');
        return JSON.parse(data) as Person
    }
}