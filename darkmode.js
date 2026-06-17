// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the toggle button
    const themeToggle = document.getElementById('themeToggle');
    
    // Check if dark mode preference is saved in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Apply the saved preference on page load
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        if (themeToggle) {
            themeToggle.classList.add('dark-mode');
        }
    }
    
    // Add click event listener to toggle button
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            // Toggle the dark-mode class on body
            document.body.classList.toggle('dark-mode');
            themeToggle.classList.toggle('dark-mode');
            
            // Save the preference to localStorage
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDark);
        });
    }
});
