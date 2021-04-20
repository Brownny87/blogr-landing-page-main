const menuContainer = document.querySelector('#container-navegacion');
const button = document.querySelector('#hamburguesa');

button.addEventListener("click", () => {
    menuContainer. classList.toggle("container-navegacion--mostrar");
    button.classList.toggle("hamburguesa--open");
}, false);