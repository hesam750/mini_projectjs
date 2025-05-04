const mybtn = document.getElementById("mybtn");
const textdiv = document.getElementById("text");

function loadtext() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "text.txt", true);
    
    xhr.onload = function() {
        if(xhr.status == 200) {
            textdiv.innerHTML = this.response;
        }
    }
    
    xhr.send();
}

mybtn.addEventListener('click', loadtext);

//تمرین ajax