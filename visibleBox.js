document.addEventListener("DOMContentLoaded", function() {
    var loginBox = document.getElementById("login");

    document.getElementById("loginLink").addEventListener("click", function(event) {
        if (loginBox.style.display === "none") {
            loginBox.style.display = "block";
            document.body.style.overflow = "hidden";
        } else {
            loginBox.style.display = "none"; 
            document.body.style.overflow = " ";
        }
    });

    // Defining the IDs to close the login box 
    const idsToclose = ["home", "offer", "shop-by-category-link", "orders"];

    // Adding event listeners to close the login box 
    idsToclose.forEach(function(id) {
        document.getElementById(id).addEventListener("click", function(event) {
            // Check if the login box is visible
            if (loginBox.style.display === "block") {
                // Hide the login box
                loginBox.style.display = "none";
            }
        });
    });
});
