import express from 'express';

const app = express();



const dataHere = [];

app.get('/test', (req, res) => {
    res.send({ message: "Hello" });
});

app.get('/otherRoute', (req, res) => {
    res.send({ message: 'This is another route'})
});

app.post('/postrequest', (req, res) => {
    dataHere.push('OK')
    console.log(dataHere)
    res.send({ message: 'You posted something' })

});
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`server is listening on port`, PORT);
});