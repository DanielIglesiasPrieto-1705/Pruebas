datos_noticias = [
  {
    imagen: "img/expedition.jpg",
    titulo: "Clair Obscur Expedition 33 gana los Game Awards",
    info: "Clair Obscur Expedition 33 ganó el pasado 11 de diciembre el premio a mejor juego del año junto a otros premios.",
  },
  {
    imagen: "img/goy.jpg",
    titulo:
      "Ghost Of Yotei revela un posible DLC de su antecesor (Ghost Of Tsushima)",
    info: "El estudio Sucker Punch, creadores de Ghost of Yotei, revelaron el pasado 10 de diciembre un posible DLC que abarcara la historia de Jin sakai tras su victoria de acabar a los mongoles.",
  },
  {
    imagen: "img/prototype.jpg",
    titulo: "Un insider revela posible remake de la saga de prototype",
    info: "Un insider bastante legitimo y famoso revelo hace un par de semanas que posiblemente a mediados de 2027 se revelara ante el publico un trailer de un remake de prototype 1.",
  },
  {
    imagen: "img/spiderman.jpg",
    titulo: "Se cancelan DLCs de Marvel Spiderman 2",
    info: "Insomniac cancela 3 DLC del juego Marvel Spiderman 2 por la filtracion de datos que tuvo dicha empresa de mas de 100 TB de informacion",
  },
];

datos_juegos = [
  {
    imagen: ""
  }

];

const contenidoNoticias = document.querySelector("#noticias");
const grupo = document.querySelector(".grupo");
const nuevoGrupo = document.createElement("div");
nuevoGrupo.classList.add("grupo");
datos_noticias.forEach((item) => {
  grupo.innerHTML += `
    <article class="anuncio">
            <div class="container_img">
              <img class="img_anuncio" src="${item.imagen}" alt="expedition_33_IA" />
            </div>
            <div class="container_info">
              <h2>${item.titulo}</h2>
              <p>${item.info}</p>
            </div>
            <div class="contacto">
              <img src="img/logotipo.png" alt="contacto">
              <div class="contacto_info">
                <p>Daniel Iglesias Prieto</p>
                <p>Programador Junior</p>
                <span>Dec 19, 2025</span>
              </div>
            </div>
          </article>
    `;
  nuevoGrupo.innerHTML += `
    <article class="anuncio">
            <div class="container_img">
              <img class="img_anuncio" src="${item.imagen}" alt="expedition_33_IA" />
            </div>
            <div class="container_info">
              <h2>${item.titulo}</h2>
              <p>${item.info}</p>
            </div>
            <div class="contacto">
              <img src="img/logotipo.png" alt="contacto">
              <div class="contacto_info">
                <p>Daniel Iglesias Prieto</p>
                <p>Programador Junior</p>
                <span>Dec 19, 2025</span>
              </div>
            </div>
          </article>
    `;
});
contenidoNoticias.appendChild(nuevoGrupo);

function activate_menu() {
  const menu_icon = document.querySelector("#menu_icon");
  const menu = document.querySelector("#menu");
  const lista_menu = document.querySelector("#list_menu");
  menu_icon.src = "img/x.png";
  menu_icon.onclick = desactivate_menu;
  if (window.innerWidth <= 450) {
    menu.style.width = "100%";
  } else if (window.innerWidth <= 540) {
    menu.style.width = "40%";
  } else if (window.innerWidth >= 800) {
    menu.style.width = "25%";
  } else {
    menu.style.width = "50%";
  }
  lista_menu.style.display = "block";
}
function desactivate_menu() {
  const menu = document.querySelector("#menu");
  const menu_icon = document.querySelector("#menu_icon");
  const lista_menu = document.querySelector("#list_menu");
  menu.style.width = "0%";
  lista_menu.style.display = "  none";

  menu_icon.src = "img/menu.png";
  menu_icon.onclick = activate_menu;
}
