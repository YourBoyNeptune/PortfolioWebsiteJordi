const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.getElementById("close-modal");
const openButtons = document.querySelectorAll(".open-modal");

openButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modalTitle.textContent = button.dataset.title;
        modalDescription.textContent = button.dataset.description;
        modal.classList.add("active");
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("active");
    }
});