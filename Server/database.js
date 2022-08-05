const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017')
    .then(() => console.log('Connected to mongoose database.'))
    .catch((err) => console.log('Could not connect to mongoose database! Error: ', err));