var numero = parseInt(prompt("Indique el numero (2 cifras)"));
if (numero >= 1 && numero <= 9) {
  alert(numero + " tiene 1 cifra");
} else if (numero >= 10 && numero <= 99) {
  alert(numero + " tiene 2 cifra");
} else {
    alert("El numero debe de ser de 2 cifras");
}
