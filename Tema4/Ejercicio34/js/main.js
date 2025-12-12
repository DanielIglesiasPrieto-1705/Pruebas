function cambiarColor(color) {
  caja.style.background = color;
}

var caja = document.querySelector("#micaja");

caja.innerHTML = "Texto en la caja desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";

var todosLosDivs = document.getElementsByTagName("div");
var valor;
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
seccion.append(hr);
for (valor in todosLosDivs) {
  if (typeof todosLosDivs[valor].textContent == "string") {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.append(texto);
    document.querySelector("#miseccion").prepend(parrafo);
  }
}

var contenidosEnTexto = todosLosDivs[2];

contenidosEnTexto.innerHTML = "Otro texto para el segundo elemento";
console.log(contenidosEnTexto);
contenidosEnTexto.style.background = "darkblue";
contenidosEnTexto.style.color = "white";
