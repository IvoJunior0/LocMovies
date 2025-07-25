// TODO: documentar isso depois.
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navContainer = document.getElementById('navbar');
const searchContainer = document.getElementById('searchContainer');
const loginContainer = document.getElementById('loginContainer');
const ladingContainer = document.getElementById('lading');

const novaAltura = window.innerHeight - navContainer.offsetHeight;
ladingContainer.style.height = `${novaAltura}px`;

window.addEventListener('resize', () => {
    const novaAltura = window.innerHeight - navContainer.offsetHeight;
    ladingContainer.style.height = `${novaAltura}px`;
});

firebase.auth().onAuthStateChanged(user => {
    // DEBUG: console.log(user)
    if (user) {
        loginContainer.innerHTML = `
            <span>${user.email.split('@')[0]}</span>
            <button class="btn-login" id="loginBtn" onclick="logout()"><i class="fa-solid fa-right-from-bracket"></i></button>
        `;
    } else {
        loginContainer.innerHTML = `
            <button class="btn-login" id="loginBtn" onclick="openLoginWindow()">Login</button>
        `;
    }
})

function openLoginWindow() {
    window.location.href = "./pages/login.html";
}

function logout() {
    console.log("teste")
    firebase.auth().signOut().then(() => {
        console.log("Logout feito com sucesso");
        window.location.href = "./pages/login.html";
    }).catch((error) => {
        console.log(error)
    });
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