import express from 'express';
import { createSubscription } from './services/subscriptionService';

const app = express();
app.use(express.json());

const subscribedUrls = [];

app.get("/ping", (req, res) => {
    subscribedUrls.forEach(async url => {
        const responses = await Promise.all(subscribedUrls.map(async (url) => {
             return await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify({
                    message: "This is a ping test"
                })
            })
        }))
        let subscribersUpCount = 0;
        responses.forEach((response) => {
            if (response.status === 200) {
                subscribersUpCount += 1;
            }
        })
        if (responses.length === subscribersUpCount) {
            console.log("All subscribers up.")
        }
        else {
            console.log(`${subscribersUpCount} out of ${responses.length} subscripers up.`);
        }
    })
    res.status(200).send({ message: "Ping requested successfully."});
})

app.post("/subscribe", (req, res) => {
    if (!req.body.callback_url || !req.body.events) {
        res.status(400).send({ message: 'Missing 1 or more required properties.' })
    }
    createSubscription(req.body)
    res.status(201).send('You are subscribed');
})

const PORT = 8080;

app.listen(PORT, () => console.log('Server is listening on port', PORT));

export default app;