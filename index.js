const loginWindow = document.getElementById('login');
function openLoginWindow() {
    // window.location.href = "./pages/login.html";
    console.log("botão de login pressionado");
    loginWindow.style.display = 'flex';
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function isEmailValid() {
    const email = document.getElementById('email').value;
    if (!email) return false;
    return validateEmail(email);
}