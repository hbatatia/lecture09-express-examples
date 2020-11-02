const getHello = (request, response) => {
    response.write("Hello from node.js");
    response.end();
};

const { listPlayers, getPlayer } = require('../app7-controllers/players');

const getPlayerList = (request, response) => {
    let players = listPlayers(request);
    response.write(JSON.stringify(players));
    response.end();
};

const getPlayerByID = (request, response) => {
    let id = request.params.id;
    let player = getPlayer(request, id);
    response.write(JSON.stringify(player));
    response.end();
};

module.exports = {
    getHello,
    getPlayerList,
    getPlayerByID
};