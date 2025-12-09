var edad = 0;
var sumaMañana = 0;
var sumaTarde = 0;
var sumaNoche = 0;

for (var i = 0; i < 5; i++) {
  edad = parseInt(
    prompt(`Indique la edad del ${i + 1}º trabajador del turno de mañana`)
  );
  sumaMañana += edad;
}
sumaMañana = Math.floor(sumaMañana / 5);
for (var i = 0; i < 6; i++) {
  edad = parseInt(
    prompt(`Indique la edad del ${i + 1}º trabajador del turno de tarde`)
  );
  sumaTarde += edad;
}
sumaTarde = Math.floor(sumaTarde / 6);
for (var i = 0; i < 11; i++) {
  edad = parseInt(
    prompt(`Indique la edad del ${i + 1}º trabajador del turno de noche`)
  );
  sumaNoche += edad;
}
sumaNoche = Math.floor(sumaNoche / 11);
document.writeln(`Promedio mañana: ${sumaMañana}`)
document.writeln(`Promedio tarde: ${sumaTarde}`)
document.writeln(`Promedio noche: ${sumaNoche}`)
if(sumaMañana > sumaTarde && sumaMañana> sumaNoche){
    alert("El turno de mañana tiene mayor promedio");
} else if(sumaTarde> sumaMañana && sumaTarde> sumaNoche){
    alert("El turno de mañana tiene mayor promedio");
} else {
    alert("El turno de noche tiene mayor promedio");
}