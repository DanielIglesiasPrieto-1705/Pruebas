let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let asunto = document.getElementById("asunto");
let error = document.getElementById("error");
let formulario = document.getElementById("formulario");
let terminos = document.getElementById("terminos_check");
formulario.addEventListener("submit", function (evt) {
  let errores = [];
  if (comprobarDato(nombre)) {
    errores.push("Falta por indicar el nombre");
  }
  if (comprobarDato(apellido)) {
    errores.push("Falta por indicar el apellido");
  }
  if (comprobarDato(email)) {
    errores.push("Falta por indicar el email");
  }
  if (comprobarDato(telefono)) {
    errores.push("Falta por indicar el telefono");
  }
  if (comprobarDato(asunto)) {
    errores.push("Falta por indicar el asunto");
  }
  if(!terminos.checked){
    errores.push("Debe de aceptar los terminos");
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
