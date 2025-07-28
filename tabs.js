const tabs = document.querySelectorAll('#nav-tabs li');
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
