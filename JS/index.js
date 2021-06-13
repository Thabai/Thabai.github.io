const navigation = document.querySelector(".navigation");
const navMenu = document.querySelector(".nav-menu");

navigation.addEventListener("click", mobileMenu);

function mobileMenu() {
    navigation.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Inside the Media Query.

.navigation.active.bar:nth-child(2) {
    opacity: 0;
}

.navigation.active.bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.navigation.active.bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    navigation.classList.remove("active");
    navMenu.classList.remove("active");
}