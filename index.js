const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile_menu");
const landingContentBox = document.querySelector(".landing_content-box");
const landingContainer = document.querySelector(".landing_container");

function toggleMenu() {
    if (menu.innerHTML === '<i class="fa-solid fa-bars"></i>') { // Remove
        landingContentBox.style.display = "none"
        mobileMenu.style.display = "flex"
        document.querySelector(".container_mobile").style.padding = "0px"
        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        menu.classList.toggle("purple_text")
    }else { // Add
        menu.classList.remove(".purple_text")
        landingContentBox.style.display = "flex"
        mobileMenu.style.display = "none"
        document.querySelector(".container_mobile").style.padding = "92px 0px"
        menu.innerHTML = '<i class="fa-solid fa-bars"></i>'
    }
}