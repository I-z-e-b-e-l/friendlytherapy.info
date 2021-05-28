const express = require('express');
const app=express();
const morgan = require('morgan');
const PORT = 3000;

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');


app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});