const express = require('express');
var session = require('express-session');
const app = express();

//define a session
app.use(session({
    secret: 'keyboard cat',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}));

//pass requests to the router middleware
const router = require('./app7-routes/post');
app.use('/', router);
app.use('/api/players', router);
app.use('/api/players/:id', router);
console.log("Out controllers");

//make the app listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});