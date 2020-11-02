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

const postRoutes = require('./app6-routes/post');
//create a route for /
app.get('/', postRoutes.getHello);
//create a route for /players
app.get('/api/players', postRoutes.getPlayerList);
//create a route with parameters
app.get('/api/players/:id', postRoutes.getPlayerByID);

//make the app listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});