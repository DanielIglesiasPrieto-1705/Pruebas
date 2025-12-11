function mostrarApartado(ciudad) {
  let apartados = document.getElementsByClassName("tabcontent");
  for (let apartado of apartados) {
    apartado.style.display = "none";
  }
  let mostrar = document.getElementById(ciudad);
  mostrar.style.display = "block";
}
