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


function getPlayers() {
    var players = [];
    for (let i = 0; i < 10; i++) {
        //create names and scores randomly
        let name = "Player" + (1 + getRandomInt(10));
        let score = getRandomInt(1000);
        players[i] = new Player(i, name, score);
    }
    return players;
}


module.exports = getPlayers;