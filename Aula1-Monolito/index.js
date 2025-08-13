const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();


app.get('/api/equipments', (req, res)=> res.send({
    response: [
        {
            id: 1,
            nome: 'Projetor Multimídia Epson',
            ano: 2024,
        },
        {
            id: 2,
            nome: 'Impressora Laser HP 4577',
            ano: 2022,
        },
        {
            id: 3,
            nome: 'Monitor 32 polegadas Samsung',
            ano: 2025,
        },
    ]
}));

app.use('/', express.static('dist', {index: 'index.html'}));

app.listen(8081, ()=> console.log('Node app running!'));

