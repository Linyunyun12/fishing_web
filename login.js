document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const forgotLink = document.getElementById('forgot-link');
    const registerModal = document.getElementById('register-modal');
    const registerSubmit = document.getElementById('register-submit');

    // 登入按鈕導向首頁
    loginBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // 開啟註冊視窗
    registerBtn.addEventListener('click', () => {
        registerModal.style.display = 'flex';
    });

    // 註冊後關閉視窗並回登入頁
    registerSubmit.addEventListener('click', () => {
        alert('註冊成功！請重新登入');
        registerModal.style.display = 'none';
    });

    // 忘記密碼彈窗
    forgotLink.addEventListener('click', () => {
        alert('請聯絡管理員或使用註冊信箱找回密碼。');
    });
});
