let navMenu = document.querySelector(".nav-menu--mobile");
let allNavMenuLi = document.querySelectorAll(".nav-menu--mobile .nav-menu__link");

navMenu.addEventListener("click", function (event) {
    if (event.target.nextElementSibling) {
        
        ulofLiDisplay = event.target.nextElementSibling.style.display;

        Array.from(allNavMenuLi).forEach(function (e) {
            if (ulofLiDisplay === "block") {
                event.target.nextElementSibling.style.display = "none";
            } else if (e.nextElementSibling) {
                e.nextElementSibling.style.display = "none";
            }
        });
        if (event.target.classList.contains("nav-menu__link")) {
                if (ulofLiDisplay === "none") {
                    event.target.nextElementSibling.style.display = "block";
                } 
        }
    }
});



