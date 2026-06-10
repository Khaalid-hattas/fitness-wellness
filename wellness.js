// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// SCROLL ANIMATION

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".fade-in").forEach(item => {
    observer.observe(item);
});