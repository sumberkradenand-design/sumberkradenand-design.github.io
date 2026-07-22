const navbar = document.querySelector(".navbar");

if (navbar) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 60) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");
const navCloseBtn = document.getElementById("navCloseBtn");

if (hamburgerBtn && navMenu && navCloseBtn) {

    hamburgerBtn.addEventListener("click", () => {
        navMenu.classList.add("active");
        document.body.classList.add("menu-open");
    });

    navCloseBtn.addEventListener("click", () => {
        navMenu.classList.remove("active");
        document.body.classList.remove("menu-open");
    });

    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            document.body.classList.remove("menu-open");
        });
    });

}