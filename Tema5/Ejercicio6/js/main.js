let nombre = document.getElementById("nombre");
let email_1 = document.getElementById("email");
let email_2 = document.getElementById("emailrep");
let password = document.getElementById("pwd");
let error = document.getElementById("error");
let form = document.getElementById("form");
error.style.color = "red";
error.style.padding = "10px";
error.style.fontWeight = "bolder";
form.addEventListener("submit", function (evt) {
  let errores = [];
  if (comprobarDato(nombre)) {
    errores.push("Falta por indicar el nombre");
  }
  if (comprobarDato(email_1)) {
    errores.push("Falta por indicar el email");
  } else if (comprobarDato(email_2)) {
    errores.push("Falta por indicar la confirmación del email");
  } else if (comprobarIguales(email_1, email_2)) {
    errores.push("Los email no son iguales");
  }
  if (comprobarDato(password)) {
    errores.push("Falta por indicar la contraseña");
  }
  if (errores.length > 0) {
    evt.preventDefault();
    error.innerHTML = errores.join("<br>");
  }
});

function comprobarDato(obj) {
  let dato = obj.value;
  let correcto = false;
  if (dato === null || dato === "") {
    correcto = true;
  }
  return correcto;
}
function comprobarIguales(obj_1, obj_2) {
  let dato = obj_1.value;
  let dato2 = obj_2.value;
  let correcto = true;
  if (dato === dato2) {
    correcto = false;
  }
  return correcto;
}
