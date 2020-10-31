const express = require('express');
//run express
const app = express();
//the server has now been created!

const port = 3000;

app.use(express.static('game'));

//create a route to gamee
app.get('/game', (req, res) => {
    res.sendFile('game/index.html', { root: __dirname });
});

//make the app listen on port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});