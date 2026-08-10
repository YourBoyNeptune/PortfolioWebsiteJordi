const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const modal = document.getElementById("project-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.getElementById("close-modal");
const projectImageButtons = document.querySelectorAll(".project-image-button");

const closeProjectModal = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    modalImage.src = "";
    modalImage.alt = "";
};

projectImageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const projectCard = button.closest(".project-card");
        const projectImage = button.querySelector(".project-image");
        const projectTitle = projectCard.querySelector("h3");
        const projectDescription = projectCard.querySelector("p");

        modalImage.src = projectImage.src;
        modalImage.alt = projectImage.alt;
        modalTitle.textContent = projectTitle.textContent;
        modalDescription.textContent = projectDescription.textContent.trim();
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        closeModal.focus();
    });
});

closeModal.addEventListener("click", () => {
    closeProjectModal();
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeProjectModal();
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("active")) {
        closeProjectModal();
    }
});
