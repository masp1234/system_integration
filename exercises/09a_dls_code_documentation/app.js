import express from 'express';

const app = express();
app.use(express.static('public'));

const PORT = 8081;
app.listen(PORT, () => console.log('Server is listening on port', PORT));