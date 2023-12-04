const loginBtn = document.querySelector('.login-btn');
const homeBtn = document.querySelector('.home-btn');
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const searchForm = document.querySelector('.search-form');
const searchBar = document.querySelector('.search-bar');

// Login Page Functionality
loginBtn.addEventListener('click', () => {
    // Show login modal or redirect to login page
});

// Home Button Functionality
homeBtn.addEventListener('click', () => {
    // Redirect to the home page
});

// Add to Cart Functionality
addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const productCard = event.target.parentElement;
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;

        // Add product to cart using AJAX or local storage
        console.log(`Adding product "${productName}" to cart for ${productPrice}`);
    });
});

// Search Functionality
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchTerm = searchBar.value.trim();

    // Perform search using AJAX or filter products locally
    console.log(`Searching for products matching "${searchTerm}"`);
});
