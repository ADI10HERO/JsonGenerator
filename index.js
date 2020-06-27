const express = require('express');
const bodyParser = require('body-parser');
const random = require('./random.js');

const port = 3000;
var app = express();

app.use(bodyParser.json());

app.post('/random', async(req, res) => {
    res.header('Content-Type', 'application/json');
    random.generateJson(req.body.n).then(
        (data) => {
            res.send(JSON.stringify(data));
        }
    );
});

app.listen(port, () => console.log("Starting server..."))


/*
Sample Request:

POST http://localhost:3000/random
content-type: application/json
{
    "n": 5
}

*/