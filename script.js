const words = [
  "Offensive Cybersecurity Enthusiast"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = words[i];

  if (!isDeleting) {
    j++;
  } else {
    j--;
  }

  document.querySelector(".typing").textContent = current.substring(0, j);

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1500);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
  }

  setTimeout(type, 100);
}

type();

// ==================== Theme Toggle ====================
const toggle = document.getElementById("theme-toggle");

toggle.onclick = () => {
  document.body.classList.toggle("light");

  // Update toggle icon: 🌙 for light mode, ☀️ for dark mode
  if (document.body.classList.contains("light")) {
    toggle.textContent = "🌙"; // moon in light mode
  } else {
    toggle.textContent = "☀️"; // sun in dark mode
  }
};



// ==================== Scroll Highlight ====================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.onscroll = () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
};