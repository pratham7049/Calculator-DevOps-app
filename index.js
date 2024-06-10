const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Calculator API');
});

app.get('/add', (req, res) => {
    const { a, b } = req.query;
    const result = parseFloat(a) + parseFloat(b);
    res.send(`Result: ${result}`);
});

app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    const result = parseFloat(a) - parseFloat(b);
    res.send(`Result: ${result}`);
});

app.get('/multiply', (req, res) => {
    const { a, b } = req.query;
    const result = parseFloat(a) * parseFloat(b);
    res.send(`Result: ${result}`);
});

app.get('/divide', (req, res) => {
    const { a, b } = req.query;
    const result = parseFloat(a) / parseFloat(b);
    res.send(`Result: ${result}`);
});

app.listen(port, () => {
    console.log(`Calculator app listening at http://localhost:${port}`);
});
