function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check if dark mode is enabled in local storage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Set initial dark mode state
if (isDarkMode) {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', function() {
    // Toggle dark mode class on the body element
    body.classList.toggle('dark-mode');

    // Update dark mode state in local storage
    const isDarkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkModeEnabled.toString());

    // Apply appropriate styles based on dark mode state
    if (isDarkModeEnabled) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add('dark-mode');
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
}