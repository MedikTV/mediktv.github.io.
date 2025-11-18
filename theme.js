// Přepínání tmavého/světlého režimu
const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');

    // Uložit volbu do localStorage
    if (document.body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});

// Při načtení stránky obnovit volbu
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
}
