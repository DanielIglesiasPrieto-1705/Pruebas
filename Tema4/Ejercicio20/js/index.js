var numero = parseInt(prompt("Indique un numero del 1 al 10"));
if (numero <= 10) {
  for (var i = 1; i <= 10; i++) {
    document.writeln("<p>" + numero * i + "</p>");
  }
} else {
  alert("Solo se permiten numeros del 1 al 10");
}
