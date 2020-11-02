const express = require('express');
//run express
const app = express();
//the server has now been created!


app.use(express.static('game'));

//create a route to gamee
app.get('/game', (req, res) => {
    res.sendFile('game/index.html', { root: __dirname });
});

//make the app listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});