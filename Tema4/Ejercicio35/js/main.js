var nombres = [],
  edades = [];
var nombre = "",
  edad = "";

while (!nombre.toLowerCase().includes("salir")) {
  nombre = prompt(
    "Indique el nombre del trabajador [Si quiere salir escriba [salir] ]"
  );
  if (!nombre.toLowerCase().includes("salir")) {
    nombres.push(nombre.charAt(0).toUpperCase() + nombre.slice(1));
  }
}
for (let i = 0; i < nombres.length; i++) {
  edad = parseInt(prompt(`Indique la edad de ${nombres[i]}`));
  while (isNaN(edad)) {
    alert(
      "Se ha detectado que el usuario es un pelele y ha puesto letras en vez de numeros"
    );
    edad = parseInt(prompt(`Indique la edad de ${nombres[i]}`));
  }
  edades.push(edad);
}
for (let i = 0; i < nombres.length; i++) {
  document.writeln(`<p>${nombres[i]} tiene ${edades[i]} años</p>`);
}
