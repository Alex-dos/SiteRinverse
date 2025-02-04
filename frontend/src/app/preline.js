document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const html = document.querySelector('html');
  const themeToggle = document.getElementById('theme-toggle');

  const updateTheme = (theme) => {
    if (theme === 'dark') {
      html.classList.add('dark');
      localStorage.setItem('hs_theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('hs_theme', 'light');
    }
  };

  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('[data-hs-collapse]');
  const mobileMenu = document.getElementById('navbar-collapse-with-animation');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Initial theme setup
  const savedTheme = localStorage.getItem('hs_theme') || 'dark';
  updateTheme(savedTheme);

  // Theme toggle event listener if button exists
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.classList.contains('dark') ? 'light' : 'dark';
      updateTheme(currentTheme);
    });
  }
});
