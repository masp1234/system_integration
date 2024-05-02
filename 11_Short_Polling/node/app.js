import express from 'express';

const app = express();

app.use(express.static("public"));

const PORT = 8080;

// Serve alle filer i public

const randomNumbers = [];

app.get('/randomNumbers', (req, res) => {
    res.send({ data: randomNumbers });
});

app.post('/simulateNewRandomNumbers', (req, res) => {
    const randomNumber = getRandomInt(1, 10);
    randomNumbers.push(randomNumber);
    res.send({ data: randomNumber })
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomInt(1, 3));
app.listen(PORT, () => console.log('Server is listening on port: ', PORT));