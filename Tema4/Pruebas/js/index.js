// Array con posibles estados del semáforo
let estadoSemaforo = ["naranja", "Verde", "rojo", "wawa"];
// Generamos un índice aleatorio entre 0 y la longitud del array
let rand = Math.floor(Math.random() * estadoSemaforo.length);

// Usamos switch para decidir qué mensaje mostrar según el color
switch (estadoSemaforo[rand].toLowerCase()) {
  case "verde":
    console.log("Puedes pasar, está en verde");
    break;
  case "naranja":
    console.log("Con cuidado, está en naranja");
    break;
  case "rojo":
    console.log("No puedes pasar, está en rojo");
    break;
  default:
    console.log("Esta opción no está disponible"); // Para valores no contemplados
}

// Generamos una hora aleatoria entre 0 y 22
let hora = Math.floor(Math.random() * 23);

// Condicional para saludar según la hora
if (hora < 12) {
  console.log("Buenos días!!");
} else if (hora >= 12 && hora < 18) {
  console.log("Buenas tardes!!");
} else {
  console.log("Buenas noches ZzZzZz");
}

//-------------------------------------------------------------
// Variables globales para almacenar números
var num1 = 0;
var num2 = 0;

//-------------------------------------------------------------
// Función para añadir personas a una tabla
function añadirPersonas() {
  // Obtenemos valores de los inputs
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  // Seleccionamos el contenido de la tabla
  let table_html = document.getElementById("contenido_tabla");

  // Insertamos una nueva fila con nombre y apellido
  table_html.innerHTML +=
    "<tr><td>" + nombre + "</td><td>" + apellido + "</td></tr>";
}

//-------------------------------------------------------------
// Función para sumar dos números
function sumar() {
  num1 = parseInt(document.getElementById("num1").value);
  num2 = parseInt(document.getElementById("num2").value);

  // Si no son números, los inicializamos en 0
  if (isNaN(num1)) {
    num1 = 0;
  } else if (isNaN(num2)) {
    num2 = 0;
  }

  // Mostramos el resultado en el elemento con id "result"
  result = document.getElementById("result");
  result.innerHTML = "El resultado es: " + (num1 + num2);
}

//-------------------------------------------------------------
// Función para restar dos números
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

//-------------------------------------------------------------
// Función para multiplicar dos números
function multiplicar() {
  num1 = parseInt(document.getElementById("num1").value);
  num2 = parseInt(document.getElementById("num2").value);

  if (isNaN(num1)) {
    num1 = 0;
  } else if (isNaN(num2)) {
    num2 = 0;
  }

  result = document.getElementById("result");
  result.innerHTML = "El resultado es: " + num1 * num2;
}

//-------------------------------------------------------------
// Función para dividir dos números
function dividir() {
  num1 = parseInt(document.getElementById("num1").value);
  num2 = parseInt(document.getElementById("num2").value);

  if (isNaN(num1)) {
    num1 = 0;
  } else if (isNaN(num2)) {
    num2 = 0;
  }

  result = document.getElementById("result");
  result.innerHTML = "El resultado es: " + num1 / num2;
}

//-------------------------------------------------------------
// Función para cambiar el color de un elemento aleatoriamente
function cambiarColor() {
  // Array con colores disponibles
  var colores = ["red", "yellow", "orange", "blue", "pink", "cyan"];
  // Generamos un índice aleatorio
  var rand = Math.floor(Math.random() * colores.length);
  // Seleccionamos el elemento con id "box"
  let box = document.getElementById("box");
  // Cambiamos el color de fondo
  box.style.backgroundColor = colores[rand];
}

//-------------------------------------------------------------
// Función para generar números del 0 al 50
function generaNumeros() {
  let numeros = document.getElementById("numeros");
  for (var i = 0; i <= 50; i++) {
    numeros.innerHTML += i + " "; // Añadimos cada número separado por espacio
  }
}

// Función para borrar los números generados
function borrar() {
  let numeros = document.getElementById("numeros");
  numeros.innerHTML = ""; // Limpiamos el contenido
}
//------------------------------------------------------------
function comprobarPar() {
  let input = parseInt(document.getElementById("input_par").value);
  let result = document.getElementById("result_par");
  result.innerHTML = `El numero ${input} es `;
  if (input % 2 == 0) {
    result.innerHTML += "par";
  } else {
    result.innerHTML += "impar";
  }
}
//------------------------------------------------------------
function comprobarPalindromo(){
  let frase = toString(document.getElementById("input_palin").value);
  let fraseReves = obtenerReves(frase)
  console.log(fraseReves);
}
function obtenerReves(frase){
  let reves ="";
  for(var i = frase.length;i>=0;i--){
    reves+= frase[i];
  }
  return reves;
}