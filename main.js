
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXm0BA9IsOgmnAg6N0QX9ZxNj0-WNNNAU",
  authDomain: "dhanush-f9d2f.firebaseapp.com",
  projectId: "dhanush-f9d2f",
  storageBucket: "dhanush-f9d2f.appspot.com",
  messagingSenderId: "225401888791",
  appId: "1:225401888791:web:e75091451cda542792fc52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLoginBtn = document.getElementById('login-sign-in');
const accountsBtn = document.getElementById('loginLink');

// Function to display username
function displayUsername(user) {
    const usernameDisplay = document.getElementById('username-display');
    if (user) {
        // User is signed in, display username
        usernameDisplay.textContent = `Welcome, ${user.displayName}`;
        // Redirect to another page if needed
         window.location.href = "index.html";
    } else {
        // No user signed in, hide username display
        usernameDisplay.textContent = "";
    }
}

// Event listener for Google login button
googleLoginBtn.addEventListener("click", function() {
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const user = result.user;
        console.log(user);
        // Redirect to another page if needed
        //window.location.href = "afterLogin.html";
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
    });
});

// Event listener for accounts button
accountsBtn.addEventListener("click", function() {
    onAuthStateChanged(auth, (user) => {
        // Display username
        displayUsername(user);
        if (!user) {
            // No user is signed in, show login box
            var loginBox = document.getElementById("login").style.display = "block";
            document.body.style.overflow = "hidden";
        }
    });
});