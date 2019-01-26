var products = [
    product = {
        name: "product1",
        img: "img/product.jpg",
        price: 100.00
    },
    product = {
        name: "product2",
        img: "img/product.jpg",
        price: 150.00
    },
    product = {
        name: "product3",
        img: "img/product.jpg",
        price: 300.00
    }
]

for (let i = 0; i < products.length; i++) {
    var productWrap = document.createElement("div");
    productWrap.className = "productWrap";
    productWrap.style = "display: flex; justify-content: space-between; align-items: center;"
    var namePr = document.createElement("span");
    namePr.innerText = products[i].name;
    productWrap.appendChild(namePr);
    var img = document.createElement("img");
    img.src = products[i].img;
    img.style = "height: 100px"
    productWrap.appendChild(img);
    var price = document.createElement("span");
    price.innerText = products[i].price;
    productWrap.appendChild(price);
    var btn = document.createElement("button");
    btn.innerText = "Купить";
    btn.id = "product_" + (i);
    btn.setAttribute("onclick", "addToCart(this.id)");
    productWrap.appendChild(btn);
    document.querySelector(".productList").appendChild(productWrap);
}
var tr = document.createElement("tr");
var td = document.createElement("td");
td.innerText = "Название товара";
tr.appendChild(td);
var td = document.createElement("td");
td.innerText = "колличество";
tr.appendChild(td);
var td = document.createElement("td");
td.innerText = "цена";
document.querySelector(".cart").appendChild(tr);
tr.appendChild(td);
var tr = document.createElement("tr");
tr.id = "total";
var td = document.createElement("td");
td.innerText = "Всего: ";
tr.appendChild(td);
var td = document.createElement("td");
td.innerText = 0+" ед.";
td.className = "allQt";
tr.appendChild(td);
var td = document.createElement("td");
td.innerText = 0+" \u20bd";
td.className = "summ";
tr.appendChild(td);
document.querySelector(".cart").appendChild(tr);


function addToCart(id) {
    var summ = 0, allQt = 0;
    id = id.split("_")[1];
    var addedPr = document.querySelector("#rowPr_" + id);
    if (addedPr == null) {
        var product = products[id];
        var tr = document.createElement("tr");
        tr.id = "rowPr_" + id;
        var td = document.createElement("td");
        td.className = "name";
        td.innerText = product.name;
        tr.appendChild(td);
        var td = document.createElement("td");
        td.className = "qt";
        td.innerText = 1;
        tr.appendChild(td);
        var td = document.createElement("td");
        td.className = "price";
        td.innerText = product.price;
        tr.appendChild(td);
        document.querySelector(".cart").appendChild(tr);
    } else {
        addedPr.querySelector(".qt").textContent++;
        addedPr.querySelector(".price").textContent = products[id].price * addedPr.querySelector(".qt").textContent;
    }
    var allProductToCart = document.querySelectorAll(".qt");
    allProductToCart.forEach(element => {
        allQt += +element.textContent
    });
    var allProductToCart = document.querySelectorAll(".price");
    allProductToCart.forEach(element => {
        summ += +element.textContent
    });
    document.querySelector(".allQt").textContent = allQt;
    document.querySelector(".summ").textContent = summ;
    console.log(summ)
}

