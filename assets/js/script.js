document.addEventListener('DOMContentLoaded', function () {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const themeIcon = this.querySelector('i');
        themeIcon.classList.toggle('fa-moon');
        themeIcon.classList.toggle('fa-sun');
    });
});