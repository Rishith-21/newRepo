const products = [
    { id: 1, name: "Laptop", price: 899, image: "images/Laptop.jpg" },
    { id: 2, name: "Headphones", price: 199, image: "images/Headphone.jpg" },
    { id: 3, name: "Smartphone", price: 699, image: "images/Smartphone.jpg" },
    { id: 4, name: "Camera", price: 499, image: "images/Camera.jpg" },
];

const productList = document.getElementById("productList");

function displayProducts(products) {
    productList.innerHTML = "";
    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

displayProducts(products);
const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});
//Code for adding products to the cart
// let cart = [];

// function addToCart(productId) {
//     const product = products.find(p => p.id === productId);
//     cart.push(product);
//     alert(`${product.name} added to the cart!`);
// }
document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
            displayProducts(data);
        });
});

function displayProducts(products) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} added to the cart!`);
}