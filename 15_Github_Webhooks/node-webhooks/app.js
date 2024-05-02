import express from 'express';

const app = express();

// parsing json
app.use(express.json());
// parsing urlencoded forms
// extended true: nested objects
app.use(express.urlencoded({ extended: true }))

app.post("/ghwebhookjson", (req, res) => {
    console.log(req.body);
    res.sendStatus(204);
})

app.post("/githubwebhooksform", (req, res) => {
    console.log(req.body);
    res.sendStatus(204);
})

app.listen(8080, () => console.log('Server is listening on port', 8080));