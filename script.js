// Portfolio Website JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Infinite Carousel Setup
  const track = document.querySelector(".carousel-track");
  if (track) {
    const slide = track.querySelector(".carousel-slide");
    if (slide) {
      // Clone the slide for seamless looping
      const clone = slide.cloneNode(true);
      track.appendChild(clone);

      // Reset animation when it completes
      track.addEventListener("animationend", () => {
        track.style.animation = "none";
        track.offsetHeight; // Trigger reflow
        track.style.animation = "slideCarousel 30s linear infinite";
      });

      // Pause animation on hover
      track.addEventListener("mouseenter", () => {
        track.style.animationPlayState = "paused";
      });

      track.addEventListener("mouseleave", () => {
        track.style.animationPlayState = "running";
      });
    }
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  // Close mobile menu when clicking on a link
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
    });
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Active navigation highlighting
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll('nav a[href^="#"]');

  function highlightNavigation() {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("text-white", "font-semibold");
      item.classList.add("text-gray-300");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.remove("text-gray-300");
        item.classList.add("text-white", "font-semibold");
      }
    });
  }

  window.addEventListener("scroll", highlightNavigation);

  // Initialize EmailJS
  emailjs.init("pkxxELvjDsi1FJDKe");

  // Form submission using EmailJS
  const contactForm = document.getElementById("contactForm");
  const formContainer = contactForm.parentElement;

  // Create success and error message elements
  const successMessage = document.createElement("div");
  successMessage.className = "text-center py-8 space-y-4 hidden";
  successMessage.innerHTML = `
        <svg class="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 class="text-2xl font-bold text-white">Message received!</h3>
        <p class="text-gray-400 text-lg">Thank you for contacting me — I'll be in touch soon</p>
    `;

  const errorMessage = document.createElement("div");
  errorMessage.className = "text-center py-8 space-y-4 hidden";
  errorMessage.innerHTML = `
        <svg class="w-16 h-16 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 class="text-2xl font-bold text-white">Message not sent</h3>
        <p class="text-gray-400 text-lg">Something went wrong. Please try again later.</p>
    `;

  // Add message elements after the form
  formContainer.appendChild(successMessage);
  formContainer.appendChild(errorMessage);

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = this.querySelector('input[name="from_name"]').value.trim();
      const email = this.querySelector('input[name="from_email"]').value.trim();
      const message = this.querySelector(
        'textarea[name="message"]'
      ).value.trim();

      if (!name || !email || !message) {
        errorMessage.classList.remove("hidden");
        contactForm.classList.add("hidden");
        setTimeout(() => {
          errorMessage.classList.add("hidden");
          contactForm.classList.remove("hidden");
        }, 3000);
        return;
      }

      // Show loading state
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML =
        '<span class="inline-flex items-center"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Sending...</span>';

      emailjs
        .sendForm("service_r053beb", "template_4s88fpk", this)
        .then(() => {
          // Hide form and show success message
          contactForm.classList.add("hidden");
          successMessage.classList.remove("hidden");
        })
        .catch((err) => {
          // Hide form and show error message
          contactForm.classList.add("hidden");
          errorMessage.classList.remove("hidden");
          console.error("Failed to send message:", err);

          // Show form again after 3 seconds
          setTimeout(() => {
            errorMessage.classList.add("hidden");
            contactForm.classList.remove("hidden");
          }, 3000);
        })
        .finally(() => {
          // Restore button state
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        });
    });
  }

  // Add fade-in animation to elements when they come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".bg-white, .grid > div, h2, h3"
  );
  animateElements.forEach((el) => observer.observe(el));

  // Tab functionality for N8N section
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');
      
      // Remove active class from all buttons
      tabButtons.forEach(btn => {
        btn.classList.remove('active', 'bg-primary', 'text-white');
        btn.classList.add('bg-gray-700', 'text-gray-300');
      });
      
      // Add active class to clicked button
      button.classList.add('active', 'bg-primary', 'text-white');
      button.classList.remove('bg-gray-700', 'text-gray-300');
      
      // Hide all tab panes
      tabPanes.forEach(pane => {
        pane.classList.add('hidden');
        pane.classList.remove('active');
      });
      
      // Show target tab pane
      const targetPane = document.getElementById(targetTab);
      if (targetPane) {
        targetPane.classList.remove('hidden');
        targetPane.classList.add('active');
      }
    });
  });
});
