const express = require('express');
const bodyParser = require('body-parser');
const random = require('./random.js');

const port = 3000;
var app = express();

app.use(bodyParser.json());
app.post('/random', (req, res) => {
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(random.dataGenerator(req.body.n)));
});

// var Scraper = require('images-scraper');

// const google = new Scraper({
//     puppeteer: {
//         headless: false,
//     }
// });

// (async () => {
//     const results = await google.scrape('nose pins product image', 20);
//     console.log('results', results);
// })();


app.listen(port, () => console.log("Starting server..."))


/*
Sample Request:

POST http://localhost:3000/random
content-type: application/json
{
    "n": 5
}

*/