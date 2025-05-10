const h1=document.getElementById('title');

localStorage.setItem('firstName','Ali');

localStorage.setItem('lastName','Hashemi');

localStorage.removeItem('lastName');

const firstName=localStorage.getItem('firstName');

firstName ? h1.innerText=`Welcome ${firstName}` : h1.innerText='Nobody To Welcome';





