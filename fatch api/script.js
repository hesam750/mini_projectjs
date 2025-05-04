const myBtn = document.getElementById("getText");

// function getText() {
//   fetch("sample.txt").then(function (res) {
//    return res.text();
//   }).then(
//       function(data){
//           console.log(data);
//       }
//   );
// }

function getText() {
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => console.log(data))

}

myBtn.addEventListener("click", getText);

//پروژه ی تمرینی fetch api
//علاوه بر fetch ارو فانکشن هم تمرین شده
