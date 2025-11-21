// Načti uložený mód
if (localStorage.getItem("theme") === "light") {
    document.documentElement.classList.add("light");
} else {
    document.documentElement.classList.add("dark");
}

// Přepínání po kliknutí
document.getElementById("theme-toggle").addEventListener("click", () => {
    const html = document.documentElement;

    if (html.classList.contains("light")) {
        html.classList.remove("light");
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        html.classList.remove("dark");
        html.classList.add("light");
        localStorage.setItem("theme", "light");
    }
});
