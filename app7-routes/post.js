const express = require('express');
const app = express();
const postControllers = require('../app7-controllers/post');

const router = express.Router();


//create a route for /
router.get('/', postControllers.getHello);
//create a route for /players
router.get('/api/players', postControllers.getPlayerList);
//create a route with parameters
router.get('/api/players/:id', postControllers.getPlayerByID);


module.exports = router;