const burger = document.querySelector('.burger');
const menuBar = document.getElementById('menu-bar');

// Toggle menu visibility on burger click
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menuBar.classList.toggle('active');
});

// Close menu on navigation link click (mobile UX)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        menuBar.classList.remove('active');
    });
});

const leftBtn = document.querySelector(".arrow.left");
const rightBtn = document.querySelector(".arrow.right");
const cardsContainer = document.getElementById("cardsContainer");

leftBtn.addEventListener("click", () => {
    cardsContainer.scrollBy({ left: -300, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
    cardsContainer.scrollBy({ left: 300, behavior: "smooth" });
});