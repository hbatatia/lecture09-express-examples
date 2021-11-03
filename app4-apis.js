const { response } = require('express');
const express = require('express');
const app = express();


//create a route for /
app.get('/', (request, response) => {
    response.setHeader('content-type', 'text/plain');
    response.send("Hello from Express!");
});
//create a route for /players
app.get('/api/players', (request, response) => {
    const getPlayers = require('./app4-business_layer/player_manager');
    let players = getPlayers();
    response.write(JSON.stringify(players));
    response.end();
});

//read the environment variable PORT, if it is not set consider 3000
const port = process.env.PORT || 3000;
//make the app listen on port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});