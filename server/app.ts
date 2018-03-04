const expressApp = require('express'),
    path = require('path'),
    url = require('url'),
    morgan = require('morgan'),
    // _ = require('lodash'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    config = require('./config'),
    port = process.env.PORT || config.dev.port,
    auth = require('./routes/authenticate'),
    app = expressApp();


// configuration part
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(morgan('dev'));
// app.use(express.static(path.resolve(__dirname, )))


// register routes
app.use('/api/login', auth)

// catch all route
app.use('/', (req, res, next) => {
    if (req.originalUrl.indexOf('/api') > -1) {
        return next();
    } else {
        res.sendFile(path.resolve('../client/index.html'));
    }
});

app.listen(port, () => {
    console.log('Example app listening on port 3000!')
});