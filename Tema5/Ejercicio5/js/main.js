let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let formulario = document.getElementById("form");
let error = document.getElementById("error");
error.style.color = "red";
error.style.fontWeight = "bolder";
error.style.marginTop ="10px";
formulario.addEventListener("submit", function (evt) {
  let checked = document.querySelectorAll('[name="intereses"]:checked');
  let errores = [];
  if (comprobarDato(nombre)) {
    errores.push("Falta por indicar el nombre");
  }
  if (comprobarDato(email)) {
    errores.push("Falta por indicar el email");
  }
  if (checked.length == 0) {
    errores.push("Debe de marcar por lo menos un interes");
  }
  
  if(errores.length > 0){
    evt.preventDefault();
    error.innerHTML = errores.join("<br>");
  }
  console.log(checked);
});

function comprobarDato(obj) {
  let dato = obj.value;
  let correcto = false;
  if (dato === null || dato === "") {
    correcto = true;
  }
  return correcto;
}
