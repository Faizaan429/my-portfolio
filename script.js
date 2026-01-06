// mobile hamburger menu
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

// smooth scroll    
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-section");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));


// contact form
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

// Typing Effect
const texts = ["Web Developer", "Designer", "Tech Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    const typingText = document.querySelector(".typing-text");
    if (typingText) {
        typingText.textContent = letter;
    }

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Wait before typing next word
    } else {
        setTimeout(type, 100);
    }
})();

// Back to Top Button
const backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("active");
        } else {
            backToTopButton.classList.remove("active");
        }
    });

    backToTopButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Theme Toggle
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;
const icon = themeToggle ? themeToggle.querySelector("i") : null;

if (themeToggle && icon) {
    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
        body.classList.add("light-mode");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
            localStorage.setItem("theme", "light");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
            localStorage.setItem("theme", "dark");
        }
    });
}
