const { response } = require('express');
const express = require('express');
const app = express();
const port = 5000;

//create a route for /
app.get('/', (request, response) => {
    res.setHeader('content-type', 'text/plain');
    response.send("Hello from Express!");
});
//create a route for /players
app.get('/api/players', (request, response) => {
    const getPlayers = require('./app5-players');
    let players = getPlayers();
    response.write(JSON.stringify(players));
    response.end();
});

//make the app listen on port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});