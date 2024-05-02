import express from 'express';


const app = express();

let clients = [];

app.get('/events/subscribe', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    clients.push(res);

    req.on("close", () => {
        console.log("A client closed the connection", clients.length)
        clients = clients.filter((client) => client !== res);
    });

});

app.get('/events/publish', (req, res) => {
    const newData = { data: 'This is a new message'};
    clients.forEach(client => {
        client.send(newData);
    });
    // for at flushe gamle clienter, som stadig er i arrayet efter første publish
    clients = []
    res.status(204).end();
});
const PORT = 8080;

app.listen(PORT, () => console.log('Server is listening on port: ', PORT));