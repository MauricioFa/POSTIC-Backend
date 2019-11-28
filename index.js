const express = require('express');
const cors = require('cors');
const app = express();

const { config } = require('./config/index');
const productsApi = require('./routes/products');
const customersApi = require('./routes/customers');

//Middleware Body-parser
app.use(express.json());
app.use(cors());

productsApi(app);
customersApi(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
