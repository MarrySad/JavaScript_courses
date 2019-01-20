    function createChessField() {
        var newChessField = document.createElement("table");
        newChessField.className = "wholeBoard";
        newChessField.appendChild(document.createElement("tr"));
        newChessField.appendChild(document.createElement("tr"));
        newChessField.appendChild(document.createElement("tr"));
        document.body.appendChild(newChessField);
        console.log(newChessField.childNodes);
    }
