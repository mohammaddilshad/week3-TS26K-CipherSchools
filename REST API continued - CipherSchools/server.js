const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const db_url = 'DB_URL_HERE';

mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('********Connection established to DB********');
})

const app = express();

// middleware of body-parser
app.use(bodyParser.json());

// Form: /api/avengers
app.use('/api', routes);

app.listen(3001, () => {
    console.log('Listening at port number 3001');
})