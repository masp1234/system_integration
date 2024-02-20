import "dotenv/config";
import express from 'express';

const app = express();

const PORT = Number(process.env.PORT) || 8080;
const OPEN_API_URL = process.env.OPENAPI_URL;

app.get('/txt', async(req, res) => {
    try {
        const response = await fetch(OPEN_API_URL + '/txt');
        const data = await response.json();
        res.send({ data })
        
    } catch (error) {
        console.log(error)
        res.send({ message: 'An error occurred'})
    };
    
});

app.get('/csv', async(req, res) => {
    try {
        const response = await fetch(OPEN_API_URL + '/csv');
        const data = await response.json();
        res.send({ data })
        
    } catch (error) {
        console.log(error)
        res.send({ message: 'An error occurred'})
    };
    
});

app.get('/yaml', async(req, res) => {
    try {
        const response = await fetch(OPEN_API_URL + '/yaml');
        const data = await response.json();
        res.send({ data })
        
    } catch (error) {
        console.log(error)
        res.send({ message: 'An error occurred'})
    };
    
});

app.get('/xml', async(req, res) => {
    try {
        const response = await fetch(OPEN_API_URL + '/xml');
        const data = await response.json();
        res.send({ data })
        
    } catch (error) {
        console.log(error)
        res.send({ message: 'An error occurred'})
    };
    
});

app.get('/json', async(req, res) => {
    try {
        const response = await fetch(OPEN_API_URL + '/json');
        const data = await response.json();
        res.send({ data })
        
    } catch (error) {
        console.log(error)
        res.send({ message: 'An error occurred'})
    };
    
});

app.listen(PORT, () => console.log('Server is listening on port', PORT));
