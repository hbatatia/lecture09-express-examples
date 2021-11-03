const express = require('express');

//run express
const app = express();
//the server has now been created!

//debug http requests: uncomment to show how morgan works
//const morgan = require('morgan'); 
//app.use(morgan('dev'));

//set port
const port = 3000;

//create a rout fo /
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

//make the app listen on port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});