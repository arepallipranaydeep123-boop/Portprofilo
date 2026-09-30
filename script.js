/* =========================================================
   PORTFOLIO JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ACTIVE NAVIGATION LINK
    ===================================================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + currentSection
            ) {
                link.classList.add("active");
            }

        });

    });


    /* =====================================================
       SMOOTH SCROLLING
    ===================================================== */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {

                const targetSection =
                    document.querySelector(targetId);

                if (targetSection) {

                    event.preventDefault();

                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });


    /* =====================================================
       SCROLL REVEAL ANIMATION
    ===================================================== */

    const cards = document.querySelectorAll(
        ".skill-card, .project-card, .education-card, .experience-card"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    cards.forEach(function (card) {

        card.classList.add("hidden");

        observer.observe(card);

    });


    /* =====================================================
       DYNAMIC FOOTER YEAR
    ===================================================== */

    const footerText = document.querySelector("footer p");

    if (footerText) {

        const currentYear = new Date().getFullYear();

        footerText.innerHTML =
            `© ${currentYear} Arepally Pranaydeep. All Rights Reserved.`;

    }


    /* =====================================================
       CONTACT EMAIL CLICK
    ===================================================== */

    const emailLink = document.querySelector(
        'a[href^="mailto:"]'
    );

    if (emailLink) {

        emailLink.addEventListener("click", function () {

            console.log("Opening email application...");

        });

    }


    /* =====================================================
       PAGE LOAD MESSAGE
    ===================================================== */

    console.log(
        "Welcome to Arepally Pranaydeep's Portfolio!"
    );

});
document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", function () {

        let current = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });


    /* ==========================================
       SMOOTH NAVIGATION
    ========================================== */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const animatedElements = document.querySelectorAll(
        ".skill-card, .project-card, .education-card, .experience-card, .achievement-content, .contact-container"
    );

    animatedElements.forEach(function (element) {
        element.classList.add("hidden");
    });


    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach(function (element) {
        observer.observe(element);
    });


    /* ==========================================
       DYNAMIC FOOTER YEAR
    ========================================== */

    const footer = document.querySelector("footer p");

    if (footer) {

        footer.innerHTML =
            `© ${new Date().getFullYear()} Arepally Pranaydeep. All Rights Reserved.`;

    }


    /* ==========================================
       BUTTON HOVER EFFECT
    ========================================== */

    const buttons = document.querySelectorAll(".button");

    buttons.forEach(function (button) {

        button.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-4px)";
        });

        button.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0)";
        });

    });


    console.log("Portfolio loaded successfully.");

});