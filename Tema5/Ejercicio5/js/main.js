let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let formulario = document.getElementById("form");
let error = document.getElementById();
formulario.addEventListener('submit', function(evt){
    
});

function comprobarDato(obj) {
  let dato = obj.value;
  let correcto = false;
  if (dato === null || dato === "") {
    correcto = true;
  }
  return correcto;
}
