let run = document.querySelector(".run");
let clear = document.querySelector(".clear");
let Emmet = document.querySelector(".Emmet");
let Html = document.getElementById("Html");
let textArea = document.querySelector(".form-control");
run.onclick = function () {
  if (textArea.value == "") {
    setEmmet();
  } else {
    Html.innerHTML = textArea.value;
    window.localStorage.setItem("html", textArea.value);
  }
};
clear.onclick = function () {
  Html.innerHTML = "";
  textArea.value = "";
  window.localStorage.clear("html");
};
window.onload = function () {
  textArea.value = localStorage.getItem("html");
};
Emmet.onclick = function () {
  setEmmet();
};
function setEmmet() {
  textArea.value = textArea.value = `<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
</head>
<body>
</body>
</html>`;
}
