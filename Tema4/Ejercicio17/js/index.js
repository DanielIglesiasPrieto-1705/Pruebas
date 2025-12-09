var mes = parseInt(prompt("Indique el mes (Formato numero)"));
var dia;
if (mes == 12) {
  dia = parseInt(prompt("Indique el dia"));
  if (dia == 25) {
    alert(`Correcto!! Has puesto bien la fecha :D`);
  } else {
    alert(`Incorrecto!! La navidad es en el dia 25, no en el dia ${dia}`);
  }
} else {
  alert(`La navidad es en el mes de diciembre (12) no en el ${mes}`);
}
