import { XMLParser } from 'fast-xml-parser';
import fs from 'fs';

fs.readFile('../data/text.xml', (error, data) => {
    if (error) {
        console.log(error);
    }
    const parser = new XMLParser();
    const parsedObject = parser.parse(data);
    console.log(parsedObject.people.person);
});


