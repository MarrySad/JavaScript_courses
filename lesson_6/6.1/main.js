var previews = document.createElement("div");
previews.className = "previews";

for (var i = 1; i < 4; i++) {
    var preview = document.createElement("img");
    preview.className = "preview";
    preview.setAttribute("src","src/small/" + i + ".jpg");
    preview.setAttribute("onclick","viewImg(this.src)");
    preview.style.margin = "20px";
    previews.appendChild(preview);
}

document.body.appendChild(previews);
document.body.appendChild(document.createElement("hr"));
var output = document.createElement("div")
output.className = "output";
document.body.appendChild(output);


function viewImg(src) {
    document.querySelector(".output").innerHTML = "";
    var img = document.createElement("img");
    var arr = src.split('/');
    img.setAttribute("src", "src/big/" + arr[arr.length-1]);
    img.onerror = function() {
        document.querySelector(".output").innerText = "Картинка не найдена :(";
    }
    document.querySelector(".output").appendChild(img);
    
    
}