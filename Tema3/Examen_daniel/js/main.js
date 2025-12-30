var nombre = document.getElementById("nombre_form2");
var password = document.getElementById("password_form2");
var error = document.getElementById("error");
var form = document.getElementById("form2");

form.addEventListener("submit", function (evt) {
  var errorMensajes = [];
  if (nombre.value === null || nombre.value === "") {
    errorMensajes.push("Debe de ingresar el nombre");
  }
  if (password.value === null || password.value === "") {
    errorMensajes.push("Debe de ingresar la contraseña");
  }
  if (errorMensajes.length > 0) {
    evt.preventDefault();
  }
  error.innerHTML = errorMensajes.join("<br>");
});
