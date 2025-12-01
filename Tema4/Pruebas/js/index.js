let num1 = 0;
let num2 = 0;

function añadirPersonas() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let table_html = document.getElementById("contenido_tabla");

  table_html.innerHTML +=
    "<tr><td>" + nombre + "</td><td>" + apellido + "</td></tr>";
}
/*-----------------------------------------------------------------------*/

function sumar() {
  num1 = parseInt(document.getElementById("num1").value);
  num2 = parseInt(document.getElementById("num2").value);
  if (isNaN(num1)) {
    num1 = 0;
  } else if (isNaN(num2)) {
    num2 = 0;
  }
  result = document.getElementById("result");

  result.innerHTML = "El resultado es: " + (num1 + num2);
}
function resta() {
      num1 = parseInt(document.getElementById("num1").value);
  num2 = parseInt(document.getElementById("num2").value);
  if (isNaN(num1)) {
    num1 = 0;
  } else if (isNaN(num2)) {
    num2 = 0;
  }
  result = document.getElementById("result");

  result.innerHTML = "El resultado es: " + (num1 - num2);
}
function multiplicar() {
      num1 = parseInt(document.getElementById("num1").value);
  num2 = parseInt(document.getElementById("num2").value);
  if (isNaN(num1)) {
    num1 = 0;
  } else if (isNaN(num2)) {
    num2 = 0;
  }
  result = document.getElementById("result");

  result.innerHTML = "El resultado es: " + (num1 * num2);
}
function dividir() {
      num1 = parseInt(document.getElementById("num1").value);
  num2 = parseInt(document.getElementById("num2").value);
  if (isNaN(num1)) {
    num1 = 0;
  } else if (isNaN(num2)) {
    num2 = 0;
  }
  result = document.getElementById("result");

  result.innerHTML = "El resultado es: " + (num1 / num2);
}
