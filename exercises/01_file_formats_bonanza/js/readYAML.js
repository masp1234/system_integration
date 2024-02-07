import yaml from 'js-yaml';
import fs from 'fs';

fs.readFile('../data/text.yaml', 'utf8', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        const file = yaml.load(data);
        console.log(file.people);
    }
});