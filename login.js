document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email.trim() === "" || password.trim() === "") {
        alert("請輸入帳號與密碼");
        return;
    }
// 模擬登入成功，導向首頁
    window.location.href = "index.html";
});