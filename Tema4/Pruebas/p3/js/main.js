function active_menu() {
    const menu = document.getElementById('menu-pantalla');
    const boton = document.getElementById('boton-menu');
    menu.style.width = '100%';
    menu.style.left = '0';
    boton.style.display = 'none';
}
function close_menu() {
    const menu = document.getElementById('menu-pantalla');
    const boton = document.getElementById('boton-menu');
    menu.style.width = '0%';
    menu.style.left = '-100px';
    boton.style.display = 'block';
}

function open_login(){
    const login = document.getElementById("panel-registro");
    login.style.display = "block";
}
function close_login(){
    const login = document.getElementById("panel-registro");
    login.style.display = "none";
}