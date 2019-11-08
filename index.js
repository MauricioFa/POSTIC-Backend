const express = require('express');
const app = express();

const { config } = require('./config/index');
const productsApi = require('./routes/products');

productsApi(app);

app.listen(config.port, function(){
    console.log(`Listening http://localhost:${config.port}`);
})