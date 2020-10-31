const express = require('express');
const app = express();
const port = 5000;

const postRoutes = require('./routes/post')
    //create a route for /
app.get('/', postRoutes.getHello);
//create a route for /players
app.get('/api/players', postRoutes.getPlayerList);

//make the app listen on port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});