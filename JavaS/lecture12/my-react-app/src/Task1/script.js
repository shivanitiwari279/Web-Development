const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const error = document.getElementById("error");
const productsDiv = document.getElementById("products");

searchBtn.addEventListener("click", searchProducts);

async function searchProducts() {

    let query = searchInput.value.trim();

    // Validation
    if (query === "") {
        error.textContent = "Please enter a product name.";
        productsDiv.innerHTML = "";
        return;
    }

    error.textContent = "";

    try {
        const response = await fetch(
            `https://dummyjson.com/products/search?q=${query}`
        );

        const data = await response.json();

        displayProducts(data.products);

    } catch (err) {
        error.textContent = "Something went wrong.";
    }
}

function displayProducts(products) {

    productsDiv.innerHTML = "";

    if (products.length === 0) {
        productsDiv.innerHTML = "<h3>No products found.</h3>";
        return;
    }

    products.forEach(product => {
        productsDiv.innerHTML += `
            <div>
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
            </div>
            <hr>
        `;
    });
}