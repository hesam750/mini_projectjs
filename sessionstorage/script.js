const input = document.getElementById("name");
const form = document.querySelector("form");
const submit = document.getElementById("submitName");
const remove = document.getElementById("removeName");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

submit.addEventListener('click',()=>{
    sessionStorage.setItem('name',input.value);
});

remove.addEventListener('click',()=>{
    sessionStorage.removeItem('name');
})

const h1=document.querySelector('#title');

const firstName = sessionStorage.getItem("name");

firstName
  ? (h1.innerText = `Welcome ${firstName}`)
  : (h1.innerText = "Nobody To Welcome");
