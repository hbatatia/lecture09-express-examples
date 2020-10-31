function Bee(beeNumber) {
    //the HTML element corresponding to the IMG of the wolf
    this.htmlElement = createBeeImg(beeNumber);
    //iits HTML ID
    this.id = this.htmlElement.id;
    //the left position (x)
    this.x = this.htmlElement.offsetLeft;
    //the top position (y)
    this.y = this.htmlElement.offsetTop;

    this.move = function(dx, dy) {
        //move the bees by dx, dy
        this.x += dx;
        this.y += dy;
        this.display();

    };

    this.display = function() {
        //ajust position of bee and display it
        this.fitBounds();
        this.htmlElement.style.left = this.x + "px";
        this.htmlElement.style.top = this.y + "px";
        this.htmlElement.style.display = "block";
    };

    this.fitBounds = function() {
        //check and make sure the bees stays in the board space
        let parent = this.htmlElement.parentElement;
        let iw = this.htmlElement.offsetWidth;
        let ih = this.htmlElement.offsetHeight;
        let l = parent.offsetLeft;
        let t = parent.offsetTop;
        let w = parent.offsetWidth;
        let h = parent.offsetHeight;
        if (this.x < 0) this.x = 0;
        if (this.x > w - iw) this.x = w - iw;
        if (this.y < 0) this.y = 0;
        if (this.y > h - ih) this.y = h - ih;

    };

    this.remove = function() {
        //remove the bee and delete its IMG
        if (typeof bees !== 'undefined') {
            //remove element from bees array
            const index = bees.indexOf(this);
            if (index > -1) {
                bees.splice(index, 1);
            }
        }
        //remove element from div
        this.htmlElement.parentNode.removeChild(this.htmlElement);
    };

}

function createBeeImg(wNum) {
    //get dimension and position of board div
    let boardDiv = document.getElementById("board");
    let boardDivW = boardDiv.offsetWidth;
    let boardDivH = boardDiv.offsetHeight;
    let boardDivX = boardDiv.offsetLeft;
    let boardDivY = boardDiv.offsetTop;

    let img = document.createElement("img");
    img.setAttribute("src", "images/bee.gif");
    //img.setAttribute("height", "100");
    img.setAttribute("width", "100");
    img.setAttribute("alt", "wolf");
    img.setAttribute("id", "wolf" + wNum);
    img.setAttribute("class", "Wolf"); //set class
    //img.style.display = "none";

    img.style.position = "absolute"
    boardDiv.appendChild(img);

    //set initial position   
    let x = getRandomInt(boardDivW);
    let y = getRandomInt(boardDivH);
    img.style.left = (boardDivX + x) + "px";
    img.style.top = (y) + "px";

    //for debug only
    console.log("(x, L) = (" + x + "," + boardDivX + ") ");
    console.log("(y, T) = (" + y + "," + boardDivY + ")");
    console.log("(left, top) = (" + img.offsetLeft + "," + img.offsetTop + ") / (" + boardDivW + "," + boardDivH + ")");

    return img;
}

function deleteBees() {
    //delete all bees
    while (bees[0]) {
        bees[0].remove();
    }
}

function moveBees() {
    //get speed
    let speed = document.getElementById("speedBees").value;
    //move randomly each bee
    for (let i = 0; i < bees.length; i++) {
        let dx = getRandomInt(2 * speed) - speed;
        let dy = getRandomInt(2 * speed) - speed;
        bees[i].move(dx, dy);
        isHit(bees[i], bear);
    }

}

function restart() {
    document.getElementById("hits").innerHTML = 0;
    document.getElementById("duration").innerHTML = "?";
    //take start time
    startTime = new Date();

    //reinit update timer
    clearTimeout(updateTimer);

    //create bear
    bear = new Bear();
    //delete exisiting bees
    if (typeof bees !== 'undefined') {
        deleteBees();
    }
    //create new array for bees
    bees = new Array();

    //create bees
    makeBees();

    // Add an event listener to the keypress event.
    document.addEventListener("keydown", keyDownHandler, false);

    //create a timer for updating position of bees
    updateBees();

}

function makeBees() {
    //get number of bees
    let nbBees = document.getElementById("nbBees").value;
    nbBees = Number(nbBees);
    if (isNaN(nbBees)) {
        window.alert("Invalid number of bees");
        return;
    }

    //create bees 
    let i = 1;
    while (i <= nbBees) {
        var num = i;
        //create object and its img element
        var bee = new Bee(num);
        bee.display();
        //store it in the array
        bees.push(bee);
        i++;
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function addBee() {
    //get number of bees
    let nbBees = document.getElementById("nbBees").value;
    nbBees = Number(nbBees);
    if (isNaN(nbBees)) {
        window.alert("Invalid number of bees");
        return;
    }
    //add 1
    nbBees++;
    //display number of bees
    document.getElementById("nbBees").value = nbBees;

    //create object and its img element
    let bee = new Bee(nbBees);
    bee.display();
    //store it in the array
    bees.push(bee);
}

function updateBees() // update loop for game
{
    //make bees move randomly
    moveBees();
    //get update period
    let period = document.getElementById("periodTimer").value;
    updateTimer = setTimeout('updateBees()', period);

}

// when key is pressed  (user input)
function keyDownHandler(e) {
    if (e.keyCode == KEYRIGHT) {
        bear.move(1, 0)
    } // right key
    if (e.keyCode == KEYLEFT) {
        bear.move(-1, 0)
    } // left key

    if (e.keyCode == KEYUP) {
        bear.move(0, -1)
    } // up key
    if (e.keyCode == KEYDOWN) {
        bear.move(0, 1)
    } // down key

}

function Bear() {
    this.dBear = 100;
    this.htmlElement = document.getElementById("bear");
    this.id = this.htmlElement.id;
    this.x = this.htmlElement.offsetLeft;
    this.y = this.htmlElement.offsetTop;

    this.move = function(xDir, yDir) {
        this.x += this.dBear * xDir;
        this.y += this.dBear * yDir;
        this.display();
    };

    this.display = function() {
        this.fitBounds();
        this.htmlElement.style.left = this.x + "px";
        this.htmlElement.style.top = this.y + "px";
        this.htmlElement.style.display = "block";
    };

    this.fitBounds = function() {
        let parent = this.htmlElement.parentElement;
        let iw = this.htmlElement.offsetWidth;
        let ih = this.htmlElement.offsetHeight;
        let l = parent.offsetLeft;
        let t = parent.offsetTop;
        let w = parent.offsetWidth;
        let h = parent.offsetHeight;
        if (this.x < 0) this.x = 0;
        if (this.x > w - iw) this.x = w - iw;
        if (this.y < 0) this.y = 0;
        if (this.y > h - ih) this.y = h - ih;

    };

}

function isHit(defender, offender) {
    if (cross(defender, offender)) {
        let thisDuration = new Date() - startTime;
        let score = hits.innerHTML;
        score = Number(score) + 1;
        hits.innerHTML = score;
        //window.log("Game Over!");
        let currentDuration = duration.innerHTML;
        if (currentDuration !== "?") {
            currentDuration = Number(duration.innerHTML);
            if (thisDuration < currentDuration) thisDuration = currentDuration;
        }
        document.getElementById("duration").innerHTML = thisDuration;
        //restart();
    }
}


function cross(element1, element2) {
    left1 = element1.htmlElement.offsetLeft; //i1x
    top1 = element1.htmlElement.offsetTop; //i1y
    right1 = element1.htmlElement.offsetLeft + element1.htmlElement.offsetWidth; //r1x
    bottom1 = element1.htmlElement.offsetTop + element1.htmlElement.offsetHeight; //r1y

    left2 = element2.htmlElement.offsetLeft; //i2x
    top2 = element2.htmlElement.offsetTop; //i2y
    right2 = element2.htmlElement.offsetLeft + element2.htmlElement.offsetWidth; //r2x
    bottom2 = element2.htmlElement.offsetTop + element2.htmlElement.offsetHeight; //r2y

    x_overlap = Math.max(0, Math.min(right1, right2) - Math.max(left1, left2));
    y_overlap = Math.max(0, Math.min(bottom1, bottom2) - Math.max(top1, top2));
    overlapArea = x_overlap * y_overlap;

    if (overlapArea == 0 || isNaN(overlapArea)) {
        return false;
    }
    return true;

}