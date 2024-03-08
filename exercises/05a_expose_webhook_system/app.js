import express from 'express';

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

    subscribedUrls.push(req.body.subscriptionUrl);
    console.log(subscribedUrls)
    res.status(201).send('You are subscribed');
})

const PORT = 8080;

app.listen(PORT, () => console.log('Server is listening on port', PORT));