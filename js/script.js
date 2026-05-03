// ===============================
// Smooth Scroll Navigation
// ===============================
document.querySelectorAll('aside nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===============================
// Dark Mode Toggle
// ===============================
const toggleSwitch = document.querySelector(".toggle-style-switcher");
if (toggleSwitch) {
  toggleSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
  });
}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// ===============================
// Typing Effect (iTyped)
// ===============================
if (document.querySelector(".iTypedPlugin")) {
  window.ityped.init(document.querySelector(".iTypedPlugin"), {
    strings: [
      "Cybersecurity Researcher",
      "AI Agent Explorer",
      "Machine Learning Enthusiast",
      "Security Analyst",
      "Future Tech Innovator"
    ],
    loop: true,
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1200,
    cursorChar: "|",
  });
}

// ===============================
// Portfolio Filter
// ===============================
const filterContainer = document.querySelector('.portfolio-filter');
const portfolioItems = document.querySelectorAll('.portfolio-item');

if (filterContainer) {
  const filterBtns = filterContainer.children;
  for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener('click', function () {
      filterContainer.querySelector('.active').classList.remove('active');
      this.classList.add('active');

      const filterValue = this.getAttribute('data-filter');
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || filterValue === item.getAttribute('data-category')) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  }
}

// ===============================
// Contact Form Validation
// ===============================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.details.value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    alert(`Thank you ${name}! Your message has been sent.`);
    contactForm.reset();
  });
}
