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

const postRoutes = require('./app7-routes/post');
//pass requeststo the router middleware
app.use('/', postRoutes.getHello);
app.use('/api/players', postRoutes.getPlayerList);
app.use('/api/players/:id', postRoutes.getPlayerByID);

//make the app listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});