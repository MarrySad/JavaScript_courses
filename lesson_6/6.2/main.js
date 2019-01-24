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
    var name = document.createElement("span");
    name.innerText = products[i].name;
    //productWrap.appendChild(name);
    var img = document.createElement("img");
    img.src = products[i].img;
    productWrap.appendChild(img);
    var price = document.createElement("span");
    price.innerText = products[i].price;
    productWrap.appendChild(price);
    document.querySelector(".productList").appendChild(productWrap);
}
