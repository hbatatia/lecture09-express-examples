const express = require('express');
//run express
const app = express();
//the server has now been created!

const port = 3000;

//create a rout fo /
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

//make the app listen on port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});