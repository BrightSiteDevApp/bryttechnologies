document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Sticky Header Logic ---
    const header = document.getElementById('global-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 2. Mobile Menu Toggle Logic ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const body = document.body;
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Toggle menu on hamburger click
    menuToggle.addEventListener('click', () => {
        body.classList.toggle('menu-open');
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('menu-open');
        });
    });
});
// --- 3. Dark Mode Toggle Logic ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('.theme-icon');
    const themeText = themeToggleBtn.querySelector('.theme-text');
    
    // Check local storage for saved theme
    const currentTheme = localStorage.getItem('bryt-theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Light Mode';
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('bryt-theme', 'dark');
            themeIcon.textContent = '☀️';
            themeText.textContent = 'Light Mode';
        } else {
            localStorage.setItem('bryt-theme', 'light');
            themeIcon.textContent = '🌙';
            themeText.textContent = 'Dark Mode';
        }
    });