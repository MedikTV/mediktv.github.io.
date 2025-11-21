const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    const html = document.documentElement;
    if(html.classList.contains("light-theme")){
        html.classList.remove("light-theme");
        localStorage.setItem("theme", "dark");
    } else {
        html.classList.add("light-theme");
        localStorage.setItem("theme", "light");
    }
});

// Načtení uloženého tématu
if(localStorage.getItem("theme") === "light"){
    document.documentElement.classList.add("light-theme");
} else {
    document.documentElement.classList.remove("light-theme");
}
