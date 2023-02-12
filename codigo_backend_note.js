const express = require('express');
const app = express();

//mongo conection
const _bd = require('./bd');



app.get('/', (req, res) => {
    res.send('Hello, World, soy Neicer desde node js');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
