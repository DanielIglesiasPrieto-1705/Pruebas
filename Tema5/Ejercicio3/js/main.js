let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let asunto = document.getElementById("asunto");
let errores = document.getElementById("errores");
let formularios = document.getElementById("formulario");

formularios.addEventListener('submit',  function(evt){
    let arrErrores = [];

    if(comprobarDatos(nombre)){
        arrErrores.push("Falta por indicar el nombre");
    }
    if(comprobarDatos(email)){
        arrErrores.push("Falta por indicar el correo");
    }
    if(comprobarDatos(asunto)){
        arrErrores.push("Falta por indicar el asunto");
    }

    if(arrErrores.length > 0){
        evt.preventDefault();
        errores.style.color = "red";
        errores.innerHTML = arrErrores.join("<br>");
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
