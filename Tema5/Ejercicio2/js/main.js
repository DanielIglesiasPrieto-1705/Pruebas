let error = document.getElementById("errores");
errores.style.color = "red";
let form = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellidos");
let direccion = document.getElementById("direccion");
form.addEventListener("submit", function (evt) {
  let errores = [];
  if (comprobarDatos(nombre)) {
    errores.push("Debes de indicar el nombre");
  }
  if (comprobarDatos(apellido)) {
    errores.push("Debes de indicar el apellido");
  }
  if (comprobarDatos(direccion)) {
    errores.push("Debes de indicar la direccion");
  }
  if (errores.length > 0) {
    evt.preventDefault();
    error.innerHTML = errores.join("<br>");
  }
});

function comprobarDatos(obj) {
  let dato = obj.value;
  let correcto = false;
  if (dato === null || dato === "") {
    correcto = true;
  }
  return correcto;
}
