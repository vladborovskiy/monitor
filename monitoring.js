const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/', (req, res) => {
    fetch('https://49eb8868-b0b4-4c13-abc3-374921be2f27-00-49bqwy4azxkw.worf.replit.dev/')
        .then(response => response.text())
        .then(data => {
            if (data.includes('Бот работает!')) {
                res.send('<html><head><style>body {background-color: green;}</style></head><body></body></html>');
            } else {
                res.send('<html><head><style>body {background-color: red;}</style></head><body></body></html>');
            }
        })
        .catch(error => {
            res.send('<html><head><style>body {background-color: red;}</style></head><body></body></html>');
        });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});