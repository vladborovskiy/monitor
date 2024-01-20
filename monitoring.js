const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let request = http.get('https://49eb8868-b0b4-4c13-abc3-374921be2f27-00-49bqwy4azxkw.worf.replit.dev/', (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            if (data.includes('Бот работает!')) {
                res.send('<html><head><style>body {background-color: green;}</style></head><body></body></html>');
            } else {
                res.send('<html><head><style>body {background-color: red;}</style></head><body></body></html>');
            }
        });
    });

    request.on('error', (err) => {
        res.send('<html><head><style>body {background-color: red;}</style></head><body></body></html>');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});