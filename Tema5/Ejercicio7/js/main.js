//Datos formularios
let nombre = document.getElementById("nombre");
let fecha_año = document.getElementById("fecha_año");
let fecha_mes = document.getElementById("fecha_mes");
let fecha_dia = document.getElementById("fecha_dia");
let email = document.getElementById("email");
let emailRep = document.getElementById("repmail");
let password = document.getElementById("pwd");
let passwordRep = document.getElementById("pwdrep");
let cdPostal = document.getElementById("cdpostal");
let telefono = document.getElementById("telf");
let gen_masculino = document.getElementById("masculino");
let gen_femenino = document.getElementById("femenino");

//Formularios
let formPersonal = document.getElementById("formularioPersonal");
let formCuenta = document.getElementById("formularioCuenta");
let formContacto = document.getElementById("formularioContacto");
// Errores
let errorPersonal = document.getElementById("error_personal");
errorPersonal.style.display = "none";
let errorCuenta = document.getElementById("error_cuenta");
errorCuenta.style.display = "none";
let errorContacto = document.getElementById("error_contacto");
errorContacto.style.display = "none";
formPersonal.addEventListener("submit", function (evt) {
  let errores = [];
  if (comprobarDato(nombre)) {
    errores.push("Falta por indicar el nombre");
  }
  if (comprobarDato(fecha_año)) {
    errores.push("Falta por indicar el año");
  }
  if (comprobarDato(fecha_mes)) {
    errores.push("Falta por indicar el mes");
  }
  if (comprobarDato(fecha_dia)) {
    errores.push("Falta por indicar el dia");
  }
  if (!(gen_femenino.checked || gen_masculino.checked)) {
    errores.push("Falta por indicar el genero");
  }
  if (errores.length > 0) {
    evt.preventDefault();
    errorPersonal.style.display = "block";
    errorPersonal.innerHTML = errores.join("<br>");
  } else {
    errorPersonal.style.display = "none";
  }
});
formCuenta.addEventListener("submit", function (evt) {
  let errores = [];
  let preguntas = document.getElementsByClassName("pregunta");
  let preguntas_respondida = 0;
  if (comprobarDato(email)) {
    errores.push("Falta por indicar el email");
  }
  if (comprobarDato(emailRep)) {
    errores.push("Falta por indicar el email repetido");
  }
  if (comprobarRepetido(email, emailRep)) {
    errores.push("Los email tienen que ser iguales");
  }
  if (comprobarDato(password)) {
    errores.push("Falta por indicar la contraseña");
  }
  if (comprobarDato(passwordRep)) {
    errores.push("Falta por indicar la contraseña repetida");
  }
  if (comprobarRepetido(password, passwordRep)) {
    errores.push("Las contraseñas tienen que ser iguales");
  }
  for (let i = 0; i < preguntas.length; i++) {
    if (preguntas[i].checked) {
      preguntas_respondida++;
    }
  }
  if (preguntas_respondida == 0) {
    errores.push("Selecciona al menos una pregunta de seguridad");
  }
  if (errores.length > 0) {
    evt.preventDefault();
    errorCuenta.style.display = "block";
    errorCuenta.innerHTML = errores.join("<br>");
  } else {
    errorCuenta.style.display = "none";
  }
});
formContacto.addEventListener("submit", function (evt) {
  let errores = [];
  let tipo = document.getElementsByClassName("dispositivos");
  let tipoElegido = 0;
  if (comprobarDato(cdPostal)) {
    errores.push("Falta por indicar el código postal");
  }
  if (comprobarDato(telefono)) {
    errores.push("Falta por indicar el telefono");
  }
  for (let i = 0; i < tipo.length; i++) {
    if (tipo[i].checked) {
      tipoElegido++;
    }
  }
  if (tipoElegido == 0) {
    errores.push("Falta por seleccionar el tipo de telefono");
  }
  if (errores.length > 0) {
    evt.preventDefault();
    errorContacto.style.display = "block";
    errorContacto.innerHTML = errores.join("<br>");
  } else {
    errorContacto.style.display = "none";
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

function comprobarRepetido(obj, obj1) {
  let datoOriginal = obj.value;
  let datoRep = obj1.value;
  let correcto = false;
  if (datoOriginal != datoRep) {
    correcto = true;
  }
  return correcto;
}
