numero = parseInt(prompt("Indique un numero del 1 al 10"));
while (isNaN(numero)) {
  numero = parseInt(prompt("TIPO DE DATO INCORRECTO. Hay que escribir numeros solamente"));
}
while (numero < 1 || numero > 10) {
    numero = parseInt(prompt("NUMERO EN RANGO INCORRECTO. Solo se permiten numeros del 1 al 10"));
}
alert(`Numero correcto en el rango indicado, el numero elegido es: ${numero}`);
