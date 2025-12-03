var x, y;
x = parseInt(prompt("Escribe un entero", ""));
y = parseInt(prompt("Escribe otro entero", ""));

alert(
  "La suma de " + x + " + " + y + " = " + (x + y) + "\n" +
  "El producto de " + x + " * " + y + " = " + (x * y) + "\n" +
  "El promedio de " + x + " y " + y + " = " + ((x + y) / 2)
);
