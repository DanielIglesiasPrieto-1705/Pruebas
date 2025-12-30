//Creamos array de cadenas con los nombres de los alumnos
nombres = [
  "Rafael",
  "Tito Elias",
  "Esperanza",
  "Rocio",
  "Pedro",
  "Sergio",
  "Alejandro",
  "Daniel",
];
//Creamo bucle for que itere cada elemento del array
for (let nombre of nombres) {
  //Cuando obtengamos el nombre del el array de nombres lo indamos en el html
  document.writeln(`<p>${nombre}</p>`);
}
//Una vez finalizado el bucle indicamos que se ha acabado el ejercicio
document.writeln("<p>Con este listado, acabamos el ejercicio 3</p>");
