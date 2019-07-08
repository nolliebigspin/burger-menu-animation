function burgerAnimation(burger) {
    burger.classList.toggle("fadeOut");
}

function openMenu(menu) {
    if (menu.classList.contains("fadeOut")) {
        document.getElementById("menu").style.width = "400px";
    } else {
        document.getElementById("menu").style.width = "0px";
    }
}