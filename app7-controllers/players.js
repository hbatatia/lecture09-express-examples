class Player {
    constructor(id, name, score) {
        this.id = id;
        this.name = name;
        this.score = score;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function selectPlayers(req) {
    var players = [];
    for (let i = 0; i < 10; i++) {
        //create names and scores randomly
        let id = 1 + getRandomInt(10);
        let name = "Player" + id;
        let score = getRandomInt(1000);
        players[i] = new Player(id, name, score);
    }
    req.session.players = players;
}

function listPlayers(req) {

    if (req.session.players === undefined) {
        selectPlayers(req);
    }
    return req.session.players;
}

function getPlayer(req, id) {
    let players = req.session.players;
    console.log(id);
    console.log(players);
    for (let i = 0; i < 10; i++) {
        if (players[i].id == id)
            return players[i];
    }
    return null;
}
module.exports = {
    listPlayers,
    getPlayer
};