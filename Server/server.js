const express = require('express');
const path = require('path');

const server = express();
const PORT = 3000;

server.listen(PORT, () => {
    server.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../Blog/', 'public', 'index.html')); // Change to webpack file once front-end is built
    })
});
