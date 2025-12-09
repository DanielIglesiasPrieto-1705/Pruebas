var suma = 0;
var numero =0;
for(var i = 1; i<=10;i++){
    numero = parseInt(prompt("Deme un numero"));
    if(i>=5){
        suma += numero;
    }
}
alert("Resultado de la suma de los ultimos 5 numeros: " + suma);