const getHello = (request, response) => {
    response.write("Hello from node.js");
    response.end();
};

const getPlayerList = (request, response) => {
    const getPlayers = require('../app4-players');
    let players = getPlayers();
    response.write(JSON.stringify(players));
    response.end();
};

module.exports = {
    getHello,
    getPlayerList
};