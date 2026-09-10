/* =========================================================
   HEADER SCROLL
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");


menuButton.addEventListener("click", () => {

    nav.classList.toggle("open");

    menuButton.classList.toggle("active");

});


nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuButton.classList.remove("active");

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const year =
    document.getElementById("year");

year.textContent =
    new Date().getFullYear();


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", event => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const car =
        document.getElementById("car").value.trim();

    const message =
        document.getElementById("message").value.trim();


    const subject =
        encodeURIComponent(
            `Poptávka servisu - ${car || "vozidlo"}`
        );


    const emailBody =
        encodeURIComponent(
`Jméno: ${name}
Telefon: ${phone}
Vozidlo: ${car}

Požadavek:
${message}`
        );


    window.location.href =
        `mailto:mocar.tech@gmail.com?subject=${subject}&body=${emailBody}`;

});