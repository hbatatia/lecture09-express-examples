const express = require('express');
//run express
const app = express();
//the server has now been created!

//using static to send static files 
app.use(express.static('app3-content'));

//create a route to gamee
app.get('/game', (req, res) => {
    res.sendFile('app3-content/index.html', { root: __dirname });
});

//read the environment variable PORT, if it is not set consider 3000
const port = process.env.PORT || 3000;
//listen on port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});