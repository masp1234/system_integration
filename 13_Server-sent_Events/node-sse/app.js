import express from 'express';

const app = express();

app.use(express.static('public'));

const PORT = 8080;

app.get('/synchronize-time', (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
    });

    setInterval(() => sendTimeToClient(res), 1000);
})
console.log(new Date().toISOString())


function sendTimeToClient(res) {
    const time = new Date().toISOString();
    // streamer til klienten og holder forbindelsen i live.
    res.write(`data: ${time} \n\n`);
}

app.listen(PORT, () => { console.log('Server is listening on port: ', PORT)})