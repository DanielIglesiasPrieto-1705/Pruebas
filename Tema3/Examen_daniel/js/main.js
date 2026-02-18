//Variables validacion formulario 1
var nombre1 = document.getElementById("nombre_form1");
var email1 = document.getElementById("email_form1");
var pwd1 = document.getElementById("pwd_form1");
var errores1 = document.getElementById("errores_1");
var form1 = document.getElementById("form_1");
// Variables validación Formulario 2
var nombre = document.getElementById("nombre_form2");
var password = document.getElementById("password_form2");
var error = document.getElementById("errores_2");
var form2 = document.getElementById("form2");
//Validacion formulario 1
form1.addEventListener("submit", function (evt) {
  let radios = document.querySelectorAll('[class="radio_form1"]:checked');
  var tipos = document.getElementById("tipos");
  console.log(radios);
  console.log(tipos.value);
  var errorMensajes = [];
  if (comprobarDato(nombre1)) {
    errorMensajes.push("Debe de ingresar el nombre");
  }
  if (comprobarDato(email1)) {
    errorMensajes.push("Debe de ingresar el correo electrónico");
  }
  if (comprobarDato(pwd1)) {
    errorMensajes.push("Debe de ingresar la contraseña");
  }
  if (radios.length == 0) {
    errorMensajes.push("Debe de seleccionar una opción");
  }
  if(tipos.value === "--"){
    errorMensajes.push("Debe de seleccionar un tipo de empresa u organización");
  }
  if(errorMensajes.length > 0){
    evt.preventDefault();
    errores1.innerHTML = errorMensajes.join("<br>");
  }
});
// Validación Formulario 2
form2.addEventListener("submit", function (evt) {
  var errorMensajes = [];
  if (comprobarDato(nombre)) {
    errorMensajes.push("Debe de ingresar el nombre");
  }
  if (comprobarDato(password)) {
    errorMensajes.push("Debe de ingresar la contraseña");
  }
  if (errorMensajes.length > 0) {
    evt.preventDefault();
    error.innerHTML = errorMensajes.join("<br>");
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