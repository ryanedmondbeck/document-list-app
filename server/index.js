require('dotenv').config()

const express              = require('express');
const app                  = express();
const path                 = require('path');
const sparkly              = require('sparkly');
const chalk                = require('chalk');
const bodyParser           = require('body-parser');

const PORT = process.env.PORT || 5000;
const ENV  = process.env.NODE_ENV;

const routes = require('./routes.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (ENV === 'production') {
    // This I'll leave to _scimmy mang
}

routes.init(app);

app.listen(PORT, () => {
    let fireDown   = sparkly([10, 9, 8, 7, 6, 5, 4, 2, 1, 0]);
    let fireUp = sparkly([...Array(10).keys()]);
    let msg = `${fireUp} | FML | Port: ${PORT} ${fireDown}`;
    console.log(chalk.red(msg));
});
