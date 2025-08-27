const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link =>
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-section");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));


const form = document.querySelector(".contact-form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const name = nameInput ? nameInput.value.trim() : "";
        const email = emailInput ? emailInput.value.trim() : "";
        const message = messageInput ? messageInput.value.trim() : "";

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email.");
            return;
        }

        alert("Message sent successfully!");
        form.reset();
    });
}