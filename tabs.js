const tabs = [
  document.getElementById('nav-about'),
  document.getElementById('nav-cv-ai'),
  document.getElementById('nav-cg-gd'),
  document.getElementById('nav-other'),
  document.getElementById('nav-work'),
  document.getElementById('nav-contact')
];
const tabContents = document.querySelectorAll('.tab');

// Load content from HTML file into each tab
tabContents.forEach(tab => {
  const url = tab.dataset.url;
  if (url) {
    fetch(url)
      .then(res => res.text())
      .then(html => tab.innerHTML = html);
  }
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    
    // make "Projects" active
    if (tab.id == "nav-cv-ai" || tab.id == "nav-cg-gd" || tab.id == "nav-other") {
      document.querySelector('.dropdown').classList.add('active');
    }
    
    document.getElementById(tab.dataset.tab).classList.add('active');
    
    // Close the menu on mobile
    document.querySelector('nav').classList.remove('open');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdown = dropdownToggle.closest(".dropdown");

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("open");
    hamburger.classList.toggle("is-active");
    
    if (dropdown.classList.contains("open")) {
      dropdownToggle.textContent = "\u25be Projects"
    } else {
      dropdownToggle.textContent = "\u25b8 Projects";
    }
  });
  
  // Toggle dropdown
  dropdownToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("open");

    // Update dropdown toggle text
    if (dropdown.classList.contains("open")) {
      dropdownToggle.textContent = "\u25be Projects";
    } else {
      dropdownToggle.textContent = "\u25b8 Projects";
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", () => {
    dropdown.classList.remove("open");
    dropdownToggle.textContent = "\u25b8 Projects";
  });
  
  // Close menu on tab click (mobile only)
  document.querySelectorAll(".nav-right li").forEach(tab => {
    tab.addEventListener("click", () => {
      nav.classList.remove("open");
      hamburger.classList.remove("is-active");
    });
  });
});

// Mobile device hamburger menu
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const toggle = document.querySelector(".menu-toggle");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});