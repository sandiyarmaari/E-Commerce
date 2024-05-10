 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
 import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

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
 const provider = new GoogleAuthProvider()

 const googlelogin = document.getElementById('login-sign-in');
 googlelogin.addEventListener("click",function()
{
   signInWithPopup(auth, provider)
 .then((result) => {
   // This gives you a Google Access Token. You can use it to access the Google API.
   const credential = GoogleAuthProvider.credentialFromResult(result);
   const user = result.user;
   console.log(user);
   window.location.href = "index.html";
 }).catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   
 });
})