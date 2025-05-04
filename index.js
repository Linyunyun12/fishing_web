// 功能列表按鈕點擊（個人檔案、朋友、社團）
document.querySelectorAll(".sidebar ul li").forEach(item => {
    item.addEventListener("click", () => {
        alert("這是空按鍵，尚未實作功能。");
    });
});

// 按讚功能
const likeBtn = document.querySelector(".post-actions button:nth-child(1)");
const likeCount = document.querySelector(".reactions span");
let liked = false;
let likeNumber = 86;

likeBtn.addEventListener("click", () => {
    liked = !liked;
    likeNumber += liked ? 1 : -1;
    likeCount.textContent = `👍 ${likeNumber}`;
    likeBtn.textContent = liked ? "👍 已讚" : "👍 讚";
});

// 留言功能
const commentBtn = document.querySelector(".post-actions button:nth-child(2)");
const post = document.querySelector(".post");

commentBtn.addEventListener("click", () => {
    // 若已存在留言欄，就不重複新增
    if (document.querySelector(".comment-box")) return;

    const commentBox = document.createElement("div");
    commentBox.classList.add("comment-box");
    commentBox.innerHTML = `
    <textarea placeholder="寫下留言..." rows="2" style="width: 100%; margin-top: 10px;"></textarea>
    <button class="submit-comment">送出</button>
    <div class="comment-list" style="margin-top: 10px;"></div>
  `;
    post.appendChild(commentBox);

    // 留言送出功能
    const submitBtn = commentBox.querySelector(".submit-comment");
    const textarea = commentBox.querySelector("textarea");
    const commentList = commentBox.querySelector(".comment-list");

    submitBtn.addEventListener("click", () => {
        const text = textarea.value.trim();
        if (text) {
            const p = document.createElement("p");
            p.textContent = text;
            commentList.appendChild(p);
            textarea.value = "";
        }
    });
});

// 登出按鈕功能
document.getElementById("logout-btn").addEventListener("click", () => {
    window.location.href = "login.html";
});
