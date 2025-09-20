// header
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

   function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                // Simulate scroll for demo
                window.scrollTo({
                    top: 800,
                    behavior: 'smooth'
                });
            }
        }

        // Mobile menu functions
        function toggleMobileMenu() {
            const burger = document.querySelector('.burger-menu');
            const mobileMenu = document.getElementById('mobileMenu');
            
            burger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        }

        function closeMobileMenu() {
            const burger = document.querySelector('.burger-menu');
            const mobileMenu = document.getElementById('mobileMenu');
            
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');
        }

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('site-header');
            if (window.scrollY > 50) {
                header.style.background = 'linear-gradient(135deg, rgba(31, 34, 35, 0.95) 0%, rgba(140, 151, 157, 0.95) 50%, rgba(31, 34, 35, 0.95) 100%)';
                header.style.boxShadow = '0 12px 40px rgba(31, 34, 35, 0.3)';
            } else {
                header.style.background = 'linear-gradient(135deg, #1F2223 0%, #8C979D 50%, #1F2223 100%)';
                header.style.boxShadow = '0 8px 32px rgba(31, 34, 35, 0.2)';
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const burger = document.querySelector('.burger-menu');
            const mobileMenu = document.getElementById('mobileMenu');
            const isClickInsideNav = event.target.closest('.nav-container');
            
            if (!isClickInsideNav && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });

        // Smooth scroll for all navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

// About
    fetch("about.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("about-container").innerHTML = data;
      });
        // portfolio

    fetch("portfolio.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("portfolio-container").innerHTML = data;
      });
          const tabs = document.querySelectorAll('.tab-btn');
  const art = document.getElementById('art');
  const architecture = document.getElementById('architecture');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      if(tab.dataset.tab === 'art'){
        art.style.display = 'grid';
        architecture.style.display = 'none';
      } else {
        art.style.display = 'none';
        architecture.style.display = 'grid';
      }
    });
  });