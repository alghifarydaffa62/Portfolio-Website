hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navbar = document.querySelector(".menu");
    navbar.classlist.toggle("active");
}