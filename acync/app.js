const form = document.getElementById("addPost");
const output = document.getElementById("output");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });

    const data = await response.json();

    // نمایش نتیجه روی صفحه
    output.innerHTML = `
      <h3>✅ ارسال موفق بود</h3>
      <p><strong>عنوان:</strong> ${data.title}</p>
      <p><strong>متن:</strong> ${data.body}</p>
      <p><strong>کد:</strong> ${data.id}</p>
    `;
  } catch (error) {
    output.innerHTML = `<p style="color:red;">❌ خطا در ارسال: ${error.message}</p>`;
  }
});
