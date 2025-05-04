const firstName = document.getElementById("FirstName");

const lastName = document.getElementById("LastName");

const jobTitle = document.getElementById("jobTitle");

const frmSend = document.getElementById("frmSend");

function SendData(event) {
  var xhr =new XMLHttpRequest();

  var params =
    "firstName=" +
    firstName.value +
    "&" +
    "lastName=" +
    lastName.value +
    "&" +
    "jobTitle=" +
    jobTitle.value;

  xhr.open("POST", "http://localhost:7006/api/persons/adduser", true);

  xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

  xhr.send(params);
  event.preventDefault();
}

frmSend.addEventListener('submit',SendData);

//پروژه تمرینی با استفاده از XMLHttpRequest برای متود پست
//api گیرنده فرضیه