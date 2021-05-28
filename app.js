const express = require('express');
const app=express();
const morgan = require('morgan');
const PORT = 3000;




app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});