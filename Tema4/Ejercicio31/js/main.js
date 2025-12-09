var teoria = parseInt(prompt("Indique la nota de la parte teorica"));
var practica = parseInt(prompt("Indique la nota de la parte practica"))
if(teoria>=5&&practica>=5){
    alert(`Has aprobado, la media del examen es de: ${(teoria+practica)/2}`);
} else {
    alert("Has suspendido, estudia mejor para la proxima");
}