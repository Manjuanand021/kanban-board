const express = require('express'),
    routes = express.Router(),
    jwt = require('jsonwebtoken');

routes.post('/login', (req, res) => {
    const payLoad = { email: 'llewis' };

    // create jwt token 
    // TODO - use right user object
    const token = jwt.sign(payLoad, req.app.get('secretkey'), {
        expiresIn: 1440 // expires in 24 hours
    });
    console.log(`generated jwt token - ${token}`);
    res.json({
        token: token,
        authenticated: true,
        message: 'successfully authenticated'
    });
});

module.exports = routes;