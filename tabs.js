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
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdown = dropdownToggle.closest(".dropdown");

  dropdownToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", () => {
    dropdown.classList.remove("open");
  });
});