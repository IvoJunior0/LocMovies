async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!validateEmail(email)) {
        alert("Por favor, insira um email válido");
        return;
    }
    try {
        const btn = document.querySelector('.login-btn');
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        await firebase.auth().signInWithEmailAndPassword(email, password);

        console.log("Usuário logado com sucesso");
    } catch (error) {
        console.error("Erro no login:", error);

        const btn = document.querySelector('.login-btn');
        btn.disabled = false;
        btn.textContent = 'Login';
        // Mensagens de erro
        let errorMessage = "Erro ao fazer login";
        if (error.code === "auth/wrong-password") {
            errorMessage = "Senha incorreta";
        } else if (error.code === "auth/user-not-found") {
            errorMessage = "Usuário não encontrado";
        }
        alert(errorMessage);
    }
}

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location.href = "../index.html";
    }
})

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}