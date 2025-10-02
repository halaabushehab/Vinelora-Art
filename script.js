        // Header scroll effect
        window.addEventListener("scroll", function () {
            const header = document.getElementById("site-header");
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });

        // Mobile menu functions
        function toggleMobileMenu() {
            const burger = document.querySelector(".burger-menu");
            const mobileMenu = document.getElementById("mobileMenu");

            burger.classList.toggle("active");
            mobileMenu.classList.toggle("active");
        }

        function closeMobileMenu() {
            const burger = document.querySelector(".burger-menu");
            const mobileMenu = document.getElementById("mobileMenu");

            burger.classList.remove("active");
            mobileMenu.classList.remove("active");
        }

        // Close mobile menu when clicking outside
        document.addEventListener("click", function (event) {
            const burger = document.querySelector(".burger-menu");
            const mobileMenu = document.getElementById("mobileMenu");
            const isClickInsideNav = event.target.closest(".nav-container");

            if (!isClickInsideNav && mobileMenu.classList.contains("active")) {
                closeMobileMenu();
            }
        });

        // Smooth scroll for all navigation links
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute("href"));
                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            });
        });

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }

        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                });
            } else {
                // Simulate scroll for demo
                window.scrollTo({
                    top: 800,
                    behavior: "smooth",
                });
            }
        }

// Smooth scroll for all navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// About
fetch("about.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("about-container").innerHTML = data;
  });
// portfolio

fetch("portfolio.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("portfolio-container").innerHTML = data;
  });
const tabs = document.querySelectorAll(".tab-btn");
const art = document.getElementById("art");
const architecture = document.getElementById("architecture");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    if (tab.dataset.tab === "art") {
      art.style.display = "grid";
      architecture.style.display = "none";
    } else {
      art.style.display = "none";
      architecture.style.display = "grid";
    }
  });
});

//
const iframe = document.getElementById("about.html");

iframe.onload = function () {
  iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
};

// ==================================
