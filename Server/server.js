const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Running on port ${PORT}...`)
});

require('./database');

require('./routes')(app);

module.exports = server;