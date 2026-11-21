// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// DARK AND LIGHT MODE

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light-theme")) {

        icon.classList.replace("fa-moon", "fa-sun");

    } else {

        icon.classList.replace("fa-sun", "fa-moon");

    }

});


// TYPING ANIMATION

const words = [
    "Web Developer",
    "CSE Student",
    "Programmer",
    "Tech Enthusiast"
];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typingEffect() {

    const typingElement = document.getElementById("typing");

    const currentWord = words[wordIndex];

    if (deleting) {

        charIndex--;

    } else {

        charIndex++;

    }

    typingElement.textContent =
        currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentWord.length) {

        deleting = true;

        speed = 1200;

    }

    else if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

        speed = 400;

    }

    setTimeout(typingEffect, speed);

}

typingEffect();


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;

    const receiver = "YOUR_EMAIL@gmail.com";

    const subject = encodeURIComponent(
        "Portfolio Contact from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nMessage: " + message
    );

    window.location.href =
        "mailto:" + receiver +
        "?subject=" + subject +
        "&body=" + body;

});