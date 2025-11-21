// Načti uložený mód
if (localStorage.getItem("theme") === "light") {
    document.documentElement.classList.add("light");
} else {
    document.documentElement.classList.remove("light");
}

// Přepínání po kliknutí
document.getElementById("themeToggle").addEventListener("click", () => {
    document.documentElement.classList.toggle("light");

    // Uložení do localStorage
    if (document.documentElement.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});
