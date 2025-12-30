//Pedimos al usuario que inserte su nota del teorico, pasamos el contenido de usuario a numero decimal
nota1 = parseFloat(prompt("Indique la nota del examen teorico"));
//Pedimos al usuario que inserte su nota del practico, pasamos el contenido de usuario a numero decimal
nota2 = parseFloat(prompt("Indique la nota del examen práctico"));

//Indicamos con condicional que si ambas notas son mayores o igual que 5
if (nota1 >= 5 && nota2 >= 5) {
    //Indicamos mediante alert que ha aprobado y su nota media
  alert(
    "Felicidades, has aprovado. Su nota media es de un " + (nota1 + nota2) / 2
  );
  //Si algunas de las notas no cumple la condicion (menor que 4)
} else {
    //Indicamos que ha suspedido y no se muestra la nota media
  alert("Has suspendido, no se ha podido realizar la media");
}
