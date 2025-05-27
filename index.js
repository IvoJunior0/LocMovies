const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const searchContainer = document.getElementById('searchContainer');
const loginContainer = document.getElementById('loginContainer');

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log(user)
    } else {
        console.log("b")
    }
})

function openLoginWindow() {
    window.location.href = "./pages/login.html";
}

function logout() {
    console.log("teste")
}

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    searchContainer.classList.toggle('active');
    loginContainer.classList.toggle('active');

    // Altera o ícone do menu
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});