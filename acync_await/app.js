const btn = document.getElementById("loadBtn");
const result = document.getElementById("result");

btn.addEventListener("click", async () => {
  result.innerHTML = `
    <div class="text-center mt-4">
      <div class="spinner-border text-primary" role="status"></div>
      <span>در حال دریافت اطلاعات...</span>
    </div>
  `;

  try {
    const postRes = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const post = await postRes.json();

    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    const user = await userRes.json();

    result.innerHTML = `
      <h5 class="text-success">✅ اطلاعات با موفقیت دریافت شد</h5>
      <hr>
      <h6>📝 عنوان پست:</h6>
      <p><strong>${post.title}</strong></p>
      <h6>👤 نویسنده:</h6>
      <p>${user.name} <small>(${user.email})</small></p>
      <h6>📄 متن پست:</h6>
      <p>${post.body}</p>
    `;
  } catch (err) {
    result.innerHTML = `
      <p class="text-danger">❌ خطا در دریافت اطلاعات: ${err.message}</p>
    `;
  }
});
