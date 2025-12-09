var lado1, lado2, lado3;
var contEq = 0,
  contIsos = 0,
  contEsc = 0;
for (var i = 0; i < 4; i++) {
  lado1 = parseInt(prompt("Indique el lado 1 del triangulo " + (i + 1) + "º"));
  lado2 = parseInt(prompt("Indique el lado 2 del triangulo " + (i + 1) + "º"));
  lado3 = parseInt(prompt("Indique el lado 3 del triangulo " + (i + 1) + "º"));
  if (lado1 == lado2 && lado2 == lado3) {
    contEq++;
  } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
    contIsos++;
  } else {
    contEsc++;
  }
}
document.writeln(`<p>Equilatero: ${contEq}</p>`);
document.writeln(`<p>Isósceles: ${contIsos}</p>`);
document.writeln(`<p>Escaleno: ${contEsc}</p>`);