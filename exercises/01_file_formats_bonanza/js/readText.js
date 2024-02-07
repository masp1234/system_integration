import fs from 'fs';

fs.readFile('text.txt', 'utf8', (error, personData) => {
    if (error) {
        console.log(error);
    }
    const peopleData = personData.split('\n').map(line => line.trim());
    const people = peopleData.map(person => {
        personData = person.split(',');
        return {
            firstName: personData[0],
            lastName: personData[1],
            age: personData[2]
        }
    })
    console.log(people);
})