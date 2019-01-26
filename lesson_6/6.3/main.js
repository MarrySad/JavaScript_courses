var arr = [1,2,3,4,5];

var btn_left = document.createElement("button");
btn_left.setAttribute("onclick", "prev_img()");
btn_left.innerText = "Назад";
document.body.appendChild(btn_left);

var img = document.createElement("img");
img.src = "src/"+arr[0]+".jpg";
document.body.appendChild(img);

var btn_right = document.createElement("button");
btn_right.setAttribute("onclick", "next_img()");
btn_right.innerText = "Вперед";
document.body.appendChild(btn_right);

function prev_img() {

}

function next_img() {


}