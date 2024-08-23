document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function () {
        const navbar = document.querySelector(".nav-bar");
        navbar.classList.toggle("active");
        console.log("Navbar toggled");
    }
});