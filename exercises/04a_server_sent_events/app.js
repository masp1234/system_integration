import express from 'express';

const app = express();

app.use(express.static('public'));

const stockTickers = ['AAPL', 'GOOGL', 'AMZN', 'MSFT', 'TSLA'];

function getRandomPrice() {
    return (10 + Math.random() * 10).toFixed(2);
}

function getStockData() {
    return stockTickers.map((ticker) => {
        const stockData = {
            ticker,
            price: getRandomPrice(),
            timestamp: new Date().toISOString()
        }
        return stockData;
    });
}

app.get('/stockData', (req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/event-stream',
        'Cache-control': 'no-cache',
        'Connection': 'keep-alive'
    });

    const sendEvent = (data) => {
        res.write(`data: ${JSON.stringify(data)}\n\n`)
    };

    const intervalId = setInterval(() => {
        sendEvent(getStockData());
    }, 5000);

    req.on('close', () => {
        clearInterval(intervalId);
        res.end();
    });


});

const PORT = 8080;
app.listen(PORT, () => console.log('Server is listening on', PORT));