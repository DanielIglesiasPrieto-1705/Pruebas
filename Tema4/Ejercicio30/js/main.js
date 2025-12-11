var hamburguesa = 2.3;
var terminado = true;
var continuar;
var condimento;
var precioPlus = 0;

continuar = prompt("¿Quiere añadir condimentos?");
if (continuar.toLowerCase() == "si") {
  continuar = true;
} else if (continuar.toLowerCase() == "no") {
  continuar = false;
} else {
  continuar = false;
}
if (continuar) {
  do {
    condimento = prompt(
      "¿Que condimento quieres añadir? [tomate, lechuga, queso, cebolla] Escribe 'SALIR' para salir"
    );

    if (condimento.toLowerCase() == "tomate") {
      alert(condimento + " añadido (+0.5€)");
      precioPlus += 0.5;
    } else if (condimento.toLowerCase() == "lechuga") {
      alert(condimento + " añadido (+0.6€)");
      precioPlus += 0.6;
    } else if (condimento.toLowerCase() == "queso") {
      alert(condimento + " añadido (+1€)");
      precioPlus += 1;
    } else if (condimento.toLowerCase() == "cebolla") {
      alert(condimento + " añadido (+0.8€)");
      precioPlus += 0.8;
    } else if (condimento.toLowerCase() == "salir") {
      terminado = false;
    } else {
      alert("No tenemos este ingrediente, lo sentimos");
    }
  } while (terminado);
}
document.writeln(
  `<p>La haburguesa tiene un precio de : ${hamburguesa + precioPlus} €</p>`
);
