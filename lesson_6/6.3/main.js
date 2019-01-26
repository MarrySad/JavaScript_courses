var arr = [1, 2, 3, 4, 5];
var i = 0;

var btn_left = document.createElement("button");
btn_left.setAttribute("onclick", "prev_img()");
btn_left.innerText = "Назад";
document.body.appendChild(btn_left);

var img = document.createElement("img");
img.src = "src/" + arr[i] + ".jpg";
img.id = "this_img";
document.body.appendChild(img);

var btn_right = document.createElement("button");
btn_right.setAttribute("onclick", "next_img()");
btn_right.innerText = "Вперед";
document.body.appendChild(btn_right);

function prev_img() {
    i--;
    if (i < 0) {
        i = 4;
    }
    document.querySelector("#this_img").src = "src/" + arr[i] + ".jpg";
}

function next_img() {
    i++;
    if (i >= arr.length) {
        i = 0;
    }
    document.querySelector("#this_img").src = "src/" + arr[i] + ".jpg";
}