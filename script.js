// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// Close mobile menu after clicking link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});



// ================= PACKAGE DETAILS =================


// ================= MODAL =================

const modal =
    document.getElementById("packageModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalContent =
    document.getElementById("modalContent");

const closeModal =
    document.getElementById("closeModal");

const modalBook =
    document.getElementById("modalBook");


document.querySelectorAll(".package-card")
.forEach(card => {

    card.querySelector(".details-btn")
    .addEventListener("click", function () {

        const packageName =
            card.getAttribute("data-package");

        modalTitle.textContent =
            packageName;

        modalContent.innerHTML =
            packageDetails[packageName];

        modal.classList.add("active");

    });

});


// Close modal

closeModal.addEventListener("click", function () {

    modal.classList.remove("active");

});


// Click outside modal

modal.addEventListener("click", function(e) {

    if (e.target === modal) {

        modal.classList.remove("active");

    }

});


// ================= WHATSAPP ENQUIRY =================

const enquiryForm =
    document.getElementById("enquiryForm");


enquiryForm.addEventListener("submit", function(e) {

    e.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const packageName =
        document.getElementById("package").value;

    const date =
        document.getElementById("date").value;

    const guests =
        document.getElementById("guests").value;

    const message =
        document.getElementById("message").value.trim();


    const whatsappMessage =

`Hello Munnar Surprise Tours,

I would like to enquire about a tour package.

Name: ${name}
Phone: ${phone}
Package: ${packageName || "Not selected"}
Travel Date: ${date || "Not selected"}
Guests: ${guests || "Not specified"}

Message:
${message || "No additional message"}

Thank you.`;


    const whatsappURL =
        "https://wa.me/919656300143?text="
        + encodeURIComponent(whatsappMessage);


    window.open(
        whatsappURL,
        "_blank"
    );

});



// ================= MODAL BOOK BUTTON =================

modalBook.addEventListener("click", function() {

    modal.classList.remove("active");

});