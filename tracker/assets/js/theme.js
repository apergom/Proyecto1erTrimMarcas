// Global dark mode code
let darkToggle = document.getElementById('dark-toggle');

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
}

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});