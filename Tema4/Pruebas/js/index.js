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
function comprobarPalindromo() {
  let frase = document
    .getElementById("input_palin")
    .value.toLowerCase()
    .trim()
    .replace(/\s+/g, "");
  let fraseReves = obtenerReves(frase);
  let resultado = document.getElementById("result_palin");

  if (fraseReves == frase) {
    resultado.innerHTML = "Es palindromo";
    console.log(fraseReves);
  } else {
    console.log(frase);
    resultado.innerHTML = "No es palindromo";
  }
}
function obtenerReves(frase) {
  let reves = "";
  for (var i = frase.length - 1; i >= 0; i--) {
    reves += frase[i];
  }
  return reves;
}
//-------------------------------------------------------------
function sorteo() {
  let array = [];
  //es un div
  let container = document.getElementById("container_random");
  console.log(container);
  for (let i = 0; i <= 100; i++) {
    array.push(Math.floor(Math.random() * 101));
  }
  array.sort((a, b) => a - b);
  console.log(array);
  let contador = 0;
  container.innerHTML = "<ul>";
  for (let i = 0; i <= array.length - 1; i++) {
    contador = 0;
    for (let numero of array) {
      if (i == numero) {
        contador++;
      }
    }
    container.innerHTML += `<li>${i} : ${contador}</li>`;
  }
  container.innerHTML += "</ul>";
}

//---------------------------------------------------------
function foto() {
  const video = document.querySelector("#video");
  const canvas = document.querySelector("#canvas");
  const photo = document.querySelector("#photo");
  const startbutton = document.querySelector("#startbutton");
  const width = 500;
  let height = 300;
  let streaming = false;

  // Acceder a la cámara con la API moderna
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
    })
    .catch((err) => {
      console.error("Error al acceder a la cámara: " + err);
    });

  video.addEventListener("canplay", () => {
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth / width);
      video.setAttribute("width", width);
      video.setAttribute("height", height);
      canvas.setAttribute("width", width);
      canvas.setAttribute("height", height);
      streaming = true;
    }
  });

  function takepicture() {
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(video, 0, 0, width, height);
    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
  }

  startbutton.addEventListener("click", (ev) => {
    takepicture();
    ev.preventDefault();
  });
};
