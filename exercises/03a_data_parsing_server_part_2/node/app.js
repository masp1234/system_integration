import "dotenv/config";
import express from 'express';
import asyncWrapper from "./util/asyncWrapper.js";

const app = express();

const PORT = Number(process.env.PORT) || 8080;
const OPEN_API_URL = process.env.OPENAPI_URL;

app.get('/txt', asyncWrapper(async(req, res) => {
        const response = await fetch(OPEN_API_URL + '/txt');
        const data = await response.json();

        res.send({ data })
}));

app.get('/csv', asyncWrapper(async(req, res) => {
        const response = await fetch(OPEN_API_URL + '/csv');
        const data = await response.json();

        res.send({ data })   
}));

app.get('/yaml', asyncWrapper(async(req, res) => {
        const response = await fetch(OPEN_API_URL + '/yaml');
        const data = await response.json();

        res.send({ data });
}));

app.get('/xml', asyncWrapper(async(req, res) => {

        const response = await fetch(OPEN_API_URL + '/xml');
        const data = await response.json();

        res.send({ data });
}));

app.get('/json', asyncWrapper(async(req, res) => {
        const response = await fetch(OPEN_API_URL + '/json');
        const data = await response.json();

        res.send({ data });   
}));

app.listen(PORT, () => console.log('Server is listening on port', PORT));
