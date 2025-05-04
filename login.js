document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const forgotLink = document.getElementById('forgot-link');
    const registerModal = document.getElementById('register-modal');
    const registerSubmit = document.getElementById('register-submit');
    const closeModalBtn = document.getElementById('close-modal');

    // 所有欄位的 ID
    const requiredFields = [
        'last-name', 'first-name', 'birthdate',
        'gender', 'contact', 'new-password'
    ];

    // 登入按鈕導向首頁
    loginBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // 開啟註冊視窗
    registerBtn.addEventListener('click', () => {
        registerModal.style.display = 'flex';
    });

    // 關閉註冊視窗
    closeModalBtn.addEventListener('click', () => {
        registerModal.style.display = 'none';
    });

    // 忘記密碼彈窗
    forgotLink.addEventListener('click', () => {
        alert('請聯絡管理員或使用註冊信箱找回密碼。');
    });

    // 註冊按鈕：完成後提示並關閉
    registerSubmit.addEventListener('click', () => {
        alert('註冊成功！請重新登入');
        registerModal.style.display = 'none';
    });

    // 表單驗證：所有欄位填滿才能啟用註冊按鈕
    function validateForm() {
        const allFilled = requiredFields.every(id => {
            const el = document.getElementById(id);
            return el && el.value.trim() !== '';
        });
        registerSubmit.disabled = !allFilled;
    }

    // 為每個欄位加上監聽
    requiredFields.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', validateForm);
        }
    });
    // 點擊「已經有帳號了？」關閉註冊 modal
    const hadSubmittedLink = document.querySelector('.had-submitted');
    hadSubmittedLink.addEventListener('click', (e) => {
        e.preventDefault(); // 阻止預設跳轉行為
        registerModal.style.display = 'none';
    });

    // 初始檢查一次（避免載入時就啟用按鈕）
    validateForm();
});


