function addToCart(productId) {
    // Find the product in the products array based on its ID
    const product = products.find(prod => prod.id === productId);
    if (product) {
        // Retrieve existing cart items from local storage
        let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        // Add the product to the cart
        cartItems.push(product);
        // Store the updated cart items back to local storage
        localStorage.setItem("cart", JSON.stringify(cartItems));
        // Redirect to the cart page
        window.location.href = "cart.html";
    } else {
        console.error("Product not found!");
    }
}
