let caja = document.getElementById("caja");
var color = prompt(
  "Indique el color que quiere que sea la caja [rojo,amarillo,naranja,azul,verde, rainbow]"
);
if (color != null || color != "") {
  if (color.toLocaleLowerCase() == "rojo") {
    caja.style.backgroundColor = "red";
  } else if (color.toLocaleLowerCase() == "amarillo") {
    caja.style.backgroundColor = "yellow";
  } else if (color.toLocaleLowerCase() == "naranja") {
    caja.style.backgroundColor = "orange";
  } else if (color.toLocaleLowerCase() == "azul") {
    caja.style.backgroundColor = "blue";
  } else if (color.toLocaleLowerCase() == "verde") {
    caja.style.backgroundColor = "green";
  }
  if (color.toLocaleLowerCase() == "rainbow") {
    let colores = ["red", "yellow", "orange", "blue", "cyan", "crimson"];
    let i = 0;
    setInterval(() => {
      caja.style.backgroundColor = colores[i];
      i = (i + 1) % colores.length;
    }, 100);
  }
} else {
  alert("No has puesto nada, se pone por defecto a negro");
}
function repetir() {
  location.reload(true);
}
