const express = require('express');
const app = express();

const postRoutes = require('./app5-routes/post')
    //create a route for /
app.get('/', postRoutes.getHello);
//create a route for /players
app.get('/api/players', postRoutes.getPlayerList);

//read the environment variable PORT, if it is not set consider 3000
const port = process.env.PORT || 3000;
//make the app listen on port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});