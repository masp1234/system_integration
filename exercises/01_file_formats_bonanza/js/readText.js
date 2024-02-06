import fs from 'fs';

fs.readFile('text.txt', 'utf8', (error, data) => {
    if (error) {
        console.log(error);
    }
    const peopleData = data.split('\n').map(line => line.trim());
    const peopleObjects = peopleData.map(person => {
        data = person.split(',');
        return {
            firstName: data[0],
            lastName: data[1],
            age: data[2]
        }
    })
    console.log(peopleObjects);
})