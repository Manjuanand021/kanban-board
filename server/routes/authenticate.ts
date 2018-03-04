const express = require('express'),
    routes = express.Router();

routes.post('/', (req, res) => {
    res.json({
        authenticated: true,
        message: 'successfully authenticated'
    });
});

module.exports = routes;