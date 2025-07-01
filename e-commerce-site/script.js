let products = []; // Global product list
let cart = [];

// Function to display all or filtered products
function displayProducts(productsToDisplay) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    productsToDisplay.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width:200px;height:200px;object-fit:cover;">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        alert("Product not found.");
        return;
    }
    cart.push(product);
    alert(`${product.name} added to the cart!`);
    viewCart(); // Update cart UI
}

// Show all items in the cart
function viewCart() {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartList.appendChild(cartItem);
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("totalPrice").textContent = `Total: $${total}`;
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    viewCart();
}

// Checkout button functionality
document.addEventListener("DOMContentLoaded", function () {
    // Fetch product data from backend or use fallback
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
            products = data;
            displayProducts(products);
        })
        .catch(error => {
            console.error("Failed to fetch products, using default set:", error);
            // Fallback data
            products = [
                { id: 1, name: "Laptop", price: 899, image: "images/Laptop.jpg" },
                { id: 2, name: "Headphones", price: 199, image: "images/Headphones.jpg" },
                { id: 3, name: "Smartphone", price: 699, image: "images/Smartphone.jepg" },
                { id: 4, name: "Camera", price: 499, image: "images/Camera.jpeg" },
            ];
            displayProducts(products);
        });

    // Handle search input
    document.getElementById("searchBar").addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
        displayProducts(filtered);
    });

    // Handle checkout
    document.getElementById("checkoutButton").addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        alert("Thank you for your purchase!");
        cart = [];
        viewCart();
    });
});
