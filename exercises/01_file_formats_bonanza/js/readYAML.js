import yaml from 'js-yaml';
import fs from 'fs';

try {
    const file = yaml.load(fs.readFileSync('./text.yaml', 'utf8'));
    file.people.forEach(person => console.log(person));
}
catch (e) {
    console.log(e);
}