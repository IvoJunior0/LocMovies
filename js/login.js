firebase.auth().onAuthStateChanged(user => {
    if (user) {
        //window.location.href = "../index.html";
    }
})

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function isEmailValid() {
    const email = document.getElementById('email').value;
    if (!email) return false;
    return validateEmail(email);
}