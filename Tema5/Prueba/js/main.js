let nombre = document.getElementById("nombre");
let password = document.getElementById("password");
let error = document.getElementById("error");
error.style.color = "red";
/*
function enviarFormulario() {
  console.log("Enviar formulario");
  var mensajesError = [];

  if (nombre.value === null || nombre.value === "") {
    mensajesError.push("Ingresa tu nombre");
  }
  if (password.value === null || password.value === "") {
    mensajesError.push("Ingresa tu password");
  }
  error.innerHTML = mensajesError.join("<br>");
  return false;
}*/
var form = document.getElementById("formulario");
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var mensajesError = [];

  if (nombre.value === null || nombre.value === "") {
    mensajesError.push("Ingresa tu nombre");
  }
  if (password.value === null || password.value === "") {
    mensajesError.push("Ingresa tu password");
  }
  error.innerHTML = mensajesError.join("<br>");
});
