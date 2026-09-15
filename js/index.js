document.addEventListener("DOMContentLoaded", function () {

    const marqueeBar = document.querySelector(".marquee-bar");

    if (marqueeBar) {
        const marqueeTrack = marqueeBar.querySelector(".marquee-track");

        if (marqueeTrack) {
            marqueeBar.addEventListener("mouseenter", function () {
                marqueeTrack.style.animationPlayState = "paused";
            });

            marqueeBar.addEventListener("mouseleave", function () {
                marqueeTrack.style.animationPlayState = "running";
            });
        }
    }

const navbarToggle = document.getElementById("navbarToggle");
const mainNavbar = document.getElementById("mainNavbar");
const navLinks = document.querySelectorAll(".nav-link");
const header = document.querySelector(".main-header");

if (navbarToggle && mainNavbar) {
    navbarToggle.addEventListener("click", function (e) {
        e.preventDefault();

        mainNavbar.classList.toggle("show");

        const icon = navbarToggle.querySelector("i");

        if (icon) {
            if (mainNavbar.classList.contains("show")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        }
    });

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

            mainNavbar.classList.remove("show");

            const icon = navbarToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });
    });
}

if (header) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}
    const occasionCards = document.querySelectorAll(".occasion-card");

    occasionCards.forEach(function (card, index) {
        card.style.opacity = "0";
        card.style.transform = "translateY(25px)";

        setTimeout(function () {
            card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 120);
    });

    const aboutBanner = document.querySelector(".about-banner");

    if (aboutBanner) {

        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        aboutBanner.classList.add("show");
                        observer.unobserve(aboutBanner);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        observer.observe(aboutBanner);

        const aboutStyle = document.createElement("style");

        aboutStyle.textContent = `
            .about-banner {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.8s ease, transform 0.8s ease;
            }

            .about-banner.show {
                opacity: 1;
                transform: translateY(0);
            }
        `;

        document.head.appendChild(aboutStyle);
    }

    const aboutGallery = document.querySelector(".about-gallery");
    const aboutContent = document.querySelector(".about-content");

    if (aboutGallery && aboutContent) {

        const aboutObserver = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    aboutGallery.classList.add("show");
                    aboutContent.classList.add("show");
                    aboutObserver.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.15
        });

        aboutObserver.observe(aboutGallery);
    }

    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 800,
            once: true,
            offset: 80
        });
    }

    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            card.classList.add("is-hovered");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("is-hovered");
        });

    });

    const stepCards = document.querySelectorAll(".step-card");

    stepCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            card.classList.add("active");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("active");
        });

    });

    const faqButtons = document.querySelectorAll(".faq-item .accordion-button");

    faqButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            faqButtons.forEach(function (item) {
                if (item !== this) {
                    item.classList.add("collapsed");
                }
            });

        });

    });

    const contactForm = document.getElementById("contactForm");
    const formSuccess = document.getElementById("formSuccess");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            if (formSuccess) {
                formSuccess.classList.add("show");

                setTimeout(function () {
                    formSuccess.classList.remove("show");
                }, 5000);
            }

            contactForm.reset();
        });

    }

    const footerYear = document.getElementById("footerYear");

    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

    const footerLinks = document.querySelectorAll(".site-footer a[href^='#']");

    footerLinks.forEach(function (link) {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });

    const filters = document.querySelectorAll(".work-filter");
    const workItems = document.querySelectorAll(".work-item");

    if (filters.length && workItems.length) {

        filters.forEach(function (filter) {

            filter.addEventListener("click", function () {

                filters.forEach(function (item) {
                    item.classList.remove("active");
                });

                this.classList.add("active");

                const selectedFilter = this.dataset.filter;

                workItems.forEach(function (item) {

                    const category = item.dataset.category;

                    if (
                        selectedFilter === "all" ||
                        category === selectedFilter
                    ) {
                        item.classList.remove("hide-work");
                    } else {
                        item.classList.add("hide-work");
                    }

                });

            });

        });

    }

    const modal = document.getElementById("workModal");
    const modalImage = document.getElementById("modalWorkImage");
    const modalTitle = document.getElementById("modalWorkTitle");
    const modalCategory = document.getElementById("modalWorkCategory");
    const modalClose = document.getElementById("workModalClose");
    const modalOverlay = document.querySelector(".work-modal-overlay");
    const viewButtons = document.querySelectorAll(".work-view");

    if (
        modal &&
        modalImage &&
        modalTitle &&
        modalCategory &&
        viewButtons.length
    ) {

        viewButtons.forEach(function (button) {

            button.addEventListener("click", function (event) {

                event.preventDefault();
                event.stopPropagation();

                modalImage.src = this.dataset.image;
                modalImage.alt = this.dataset.title || "";
                modalTitle.textContent = this.dataset.title || "";
                modalCategory.textContent = this.dataset.category || "";

                modal.classList.add("active");
                document.body.style.overflow = "hidden";

            });

        });

        function closeWorkModal() {
            modal.classList.remove("active");
            document.body.style.overflow = "";
        }

        if (modalClose) {
            modalClose.addEventListener("click", closeWorkModal);
        }

        if (modalOverlay) {
            modalOverlay.addEventListener("click", closeWorkModal);
        }

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape" && modal.classList.contains("active")) {
                closeWorkModal();
            }

        });

    }

});