
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
app.use(cors());

function readData(file) {
    return JSON.parse(fs.readFileSync(__dirname + '/data/' + file));
}

app.get('/ongs', (req, res) => res.json(readData('ongs.json')));
app.get('/associados', (req, res) => res.json(readData('associados.json')));
app.get('/produtos', (req, res) => res.json(readData('produtos.json')));
app.get('/noticias', (req, res) => res.json(readData('noticias.json')));

app.listen(3000, () => console.log('Backend rodando na porta 3000'));
