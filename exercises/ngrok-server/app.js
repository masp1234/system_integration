import express from 'express'

const app = express()

app.get('/date', (req, res) => {
    res.send(new Date().toISOString());
})

app.listen(8080, () => console.log('Server is listening on port: ', 8080));