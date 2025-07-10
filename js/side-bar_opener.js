let mobileButton = document.querySelector(".toggle-mobileMenu");
let sideBar = document.querySelector(".mobile-menu");
let closeButton = document.querySelector(".close-button");
let sideBarOverLay = document.querySelector(".side-overlay");

mobileButton.addEventListener("click", function () {
        sideBar.classList.add("active");
        sideBarOverLay.classList.add("show");
});

closeButton.addEventListener("click", function () {
    sideBar.classList.remove("active");
    sideBarOverLay.classList.remove("show");
});

document.addEventListener("click", function (e) {
    if (!sideBar.contains(e.target) && !closeButton.contains(e.target) &&
        sideBar.classList.contains("active") && !mobileButton.contains(e.target)) {
        sideBar.classList.remove("active");
        sideBarOverLay.classList.remove("show");
    }
});
