//Indicamos al usuario que nos ingrese un numero
let num = parseInt(prompt("Indique un numero"));
//Creamos bucle while que mientras el numero sea menor que 20 o mayor que 50, este se repita
while (num < 20 || num > 50) {
  //Indicamos mensaje de error
  alert("Has indroducido un número menor de 20 o mayor de 50");
  //Indicamos nuevamente que nos escriba el numero
  num = parseInt(prompt("Indique un numero de nuevo"));
}
//Indicamos que el numero ha sido correcto e indicamos el numero que ha escrito el usuario por pantalla
alert("Numero ingresado correcto, has ingresado el numero: " + num);
