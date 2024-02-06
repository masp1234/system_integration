import csv from 'csv-parser';
import fs from 'fs';

const people = [];

fs.createReadStream('text.csv')
    .pipe(csv())
    .on('data', (person) => people.push(person))
    .on('end', () => {
        console.log(people);
    })