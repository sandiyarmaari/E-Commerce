const googleLoginBtn = document.getElementById('login-sign-in');
googleLoginBtn.addEventListener("click", function() {
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);
        // Once signed in, fetch the user's profile information from Google
        const profile = user.providerData.find(provider => provider.providerId === 'google.com');
        // Update the accounts symbol with the user's profile picture
        const accountsBtn = document.getElementById('loginLink');
        const img = document.createElement('img');
        img.src = profile.photoURL;
        img.alt = 'User Profile';
        img.classList.add('user-profile-image');
        accountsBtn.innerHTML = '';
        accountsBtn.appendChild(img);
        // Redirect to index.html
        window.location.href = "index.html";
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
    });
});
