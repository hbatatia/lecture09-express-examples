const express = require('express');
const app = express();
const controller = require('./player_controller');

//define a router and create routes
const router = express.Router();
//create a route for /
router.get('/', controller.getHello);
//create a route for /players
router.get('/api/players', controller.getPlayerList);
//create a route with parameters
router.get('/api/players/:id', controller.getPlayerByID);

//export router
module.exports = router;