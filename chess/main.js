function createChessField() {
    var newChessField = document.createElement("table");
    newChessField.className = "wholeBoard";
    newChessField.setAttribute("align", "center");
    var isBlack;
    for (var i = 9; i > -1; i--) {
        newChessField.appendChild(document.createElement("tr"));
        isBlack = i % 2 == 0 ? 0 : 1;
        for (var j = '`'; j < 'j'; j = String.fromCharCode(j.charCodeAt(0) + 1)) {
            var td = document.createElement("td")
            if ((i == 9 && j == '`') || (i == 0 && j == '`') || (i == 9 && j == 'i') || (i == 0 && j == 'i')) { td.className = "angle"; }
            else if (i == 9) {
                td.className = "upper range";
                td.innerText = j;
            }
            else if (i == 0) {
                td.className = "lower range";
                td.innerText = j;
            }
            else if (j == '`') {
                td.className = "left range";
                td.innerText = i;
            }
            else if (j == 'i') {
                td.className = "right range";
                td.innerText = i;
            }
            else {
                td.className = i + " " + j + " cell";
                if (isBlack) {
                    td.classList.add("black");
                    isBlack = 0;
                } else {
                    isBlack = 1;
                }
            }
            newChessField.lastChild.appendChild(td);
        }
    }
    document.body.appendChild(newChessField);
}

function createCharacters() {
    var arrCell = document.getElementsByClassName("cell");
    for (var i = 0; i < arrCell.length; i++) {
        if (i == 0 || i == 7) { arrCell[i].innerHTML = characters[8]; }
        if (i == 1 || i == 6) { arrCell[i].innerHTML = characters[10]; }
        if (i == 2 || i == 5) { arrCell[i].innerHTML = characters[9]; }
        if (i == 3) { arrCell[i].innerHTML = characters[7]; }
        if (i == 4) { arrCell[i].innerHTML = characters[6]; }
        if (i >= 8 && i <= 15) { arrCell[i].innerHTML = characters[11]; }
        if (i >= 48 && i <= 55) { arrCell[i].innerHTML = characters[5]; }
        if (i == 56 || i == 63) { arrCell[i].innerHTML = characters[2]; }
        if (i == 57 || i == 62) { arrCell[i].innerHTML = characters[4]; }
        if (i == 58 || i == 61) { arrCell[i].innerHTML = characters[3]; }
        if (i == 59) { arrCell[i].innerHTML = characters[1]; }
        if (i == 60) { arrCell[i].innerHTML = characters[0]; }
    }
}

var characters = ['&#9812;', '&#9813;', '&#9814;', '&#9815;', '&#9816;', '&#9817;', '&#9818;', '&#9819;', '&#9820;', '&#9821;', '&#9822;', '&#9823;'];
