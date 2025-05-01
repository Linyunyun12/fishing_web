const authSection = document.getElementById('auth-section');
const mainSection = document.getElementById('main-section');
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');

window.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn === 'true') {
        authSection.classList.add('hidden');
        mainSection.classList.remove('hidden');
    }
});

function login() {
    const user = document.getElementById('login-user').value;
    const pw = document.getElementById('login-password').value;
    if (user && pw) {
        authSection.classList.add('hidden');
        mainSection.classList.remove('hidden');
        localStorage.setItem('loggedIn', 'true');
    } else {
        alert('請輸入帳號與密碼');
    }
}

function signup() {
    const name = document.getElementById('signup-name').value;
    const phone = document.getElementById('signup-phone').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    if (name && phone && email && password) {
        alert('註冊成功，請使用登入功能');
        toggleSignup();
    } else {
        alert('請填寫完整註冊資訊');
    }
}

function logout() {
    mainSection.classList.add('hidden');
    authSection.classList.remove('hidden');
    localStorage.removeItem('loggedIn');
}

function toggleSignup() {
    signupForm.classList.toggle('hidden');
    loginForm.classList.toggle('hidden');
}