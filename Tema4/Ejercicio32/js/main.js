var nombres = [];
var nombre = "";

while (nombre.toLowerCase() != "salir") {
    nombre = prompt("Indique el nombre del trabajador");
    if(nombre.toLowerCase()!="salir"){
        nombres.push(nombre);   
    }
}
document.writeln(`<ul>`);
for (var elemento of nombres) {
  document.writeln(`<li>${elemento}</li>`);
}
document.writeln(`</ul>`);
