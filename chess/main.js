function createChessField() {
    var newChessField = document.createElement("table");
    newChessField.className = "wholeBoard";
    var isBlack;
    //newChessField.appendChild(document.createElement("tr"));
    for (var i = 9; i > -1; i--) {
        newChessField.appendChild(document.createElement("tr"));
        isBlack = i%2==0 ? 0 : 1;
        for (var j = '`'; j < 'j'; j = String.fromCharCode(j.charCodeAt(0) + 1)) {
            var td = document.createElement("td")
            if ((i == 9 && j == '`') || (i == 0 && j == '`') || (i == 9 && j == 'i') || (i == 0 && j == 'i')) {td.className = "angle";}
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
                td.className = i + j + " cell";
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
    console.log(newChessField.childNodes);
}
/*
for (var index = '`'; index < 'i'; index = String.fromCharCode(index.charCodeAt(0)+1)) {

    console.log(index);
}
*/
