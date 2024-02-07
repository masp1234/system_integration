import fs from 'fs';

fs.readFile('../data/text.txt', 'utf8', (error, personData) => {
    if (error) {
        console.log(error);
    }
    const peopleData = personData.split('\n')
    const people = peopleData.map(person => {
        personData = person.split(' ');
        return {
            firstName: personData[0],
            lastName: personData[1],
            age: personData[2].trim()
        }
    })
    console.log(people);
})