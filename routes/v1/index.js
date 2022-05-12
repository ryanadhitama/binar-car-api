const v1 = require('express').Router();

v1.use('/', (req, res) => {
    res.send('pong')
})

module.exports = v1;