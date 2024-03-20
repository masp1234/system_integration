import express from 'express';

const app = express();
app.use(express.json());

app.post("/payload", (req, res) => {
    console.log(req.body);
});

const PORT = 8081;

app.listen(PORT, () => console.log('Server is listening on port:', PORT));
