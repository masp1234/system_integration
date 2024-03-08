import express, { json } from 'express';

const app = express();
app.use(express.json());

const subscribedUrls = [];

app.get("/ping", (req, res) => {
    subscribedUrls.forEach(async url => {
        await Promise.all(subscribedUrls.map(async (url) => {
            await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    message: "This is a ping test"
                })
            })
        }))
    })
})

app.post("/subscribe", (req, res) => {

    subscribedUrls.push(req.body.subscriptionUrl);
    console.log(subscribedUrls)
    res.status(201).send('You are subscribed');
})

const PORT = 8080;

app.listen(PORT, () => console.log('Server is listening on port', PORT));