var velocidad = 200;
var letras;
var textoAct = "";
var n = -1;

function animar() {
  var texto = "Uso de cadenas con JavaScript para efectos dinámicos";
  letras = texto.split(""); // Forma más rápida de crear el array
  mueveLetras();
}

function mueveLetras() {
  n++;
  textoAct += letras[n];

  // Corregido: El nombre debe coincidir con el NAME del input (TextoDinamico)
  document.forms[0].TextoDinamico.value = textoAct;

  if (n == letras.length - 1) {
    n = -1;
    textoAct = "";
  }

  // Corregido: Nombre de la función con L mayúscula
  setTimeout(mueveLetras, velocidad);
}
