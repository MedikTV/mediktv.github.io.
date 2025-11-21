document.addEventListener("DOMContentLoaded", () => {
    // ------------------- LIGHTBOX FUNKČNOST -------------------
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    // Selektory pro Lightbox
    const imgs = document.querySelectorAll(".project-img, .setup-img");

    if (lightbox && lightboxImg) {
        imgs.forEach(img => {
            img.addEventListener("click", () => {
                lightboxImg.src = img.src;
                lightbox.style.display = "flex";
            });
        });

        lightbox.addEventListener("click", () => {
            // Zavření Lightboxu po kliknutí kdekoliv
            lightbox.style.display = "none";
        });
    }

    // ------------------- PŘEPÍNAČ REŽIMU FUNKČNOST -------------------
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const currentTheme = localStorage.getItem("theme");

    // Načtení uloženého režimu při načtení stránky
    if (currentTheme) {
        body.classList.add(currentTheme);
        // Nastavení ikony podle uloženého režimu
        if (currentTheme === "light-mode") {
            themeToggle.textContent = "☀️"; // Ikona Slunce pro světlý režim
        } else {
            themeToggle.textContent = "🌙"; // Ikona Měsíce pro tmavý režim
        }
    } else {
        // Pokud není nic uloženo, nastavíme výchozí tmavý režim (z HTML class="dark-mode" a nastavíme ikonu)
        body.classList.add("dark-mode");
        themeToggle.textContent = "🌙";
    }

    // Funkce pro přepínání
    const toggleTheme = () => {
        // Zjistíme, jestli je aktivní světlý režim
        const isLight = body.classList.contains("light-mode");

        if (isLight) {
            // Přepnout na TMavý režim
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            themeToggle.textContent = "🌙";
            localStorage.setItem("theme", "dark-mode");
        } else {
            // Přepnout na SVětlý režim
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            themeToggle.textContent = "☀️";
            localStorage.setItem("theme", "light-mode");
        }
    };

    // Naslouchání na kliknutí tlačítka pro přepínání režimu
    if (themeToggle) {
        themeToggle.addEventListener("click", toggleTheme);
    }
    
    // ------------------- ANIMACE PŘECHODŮ MENU -------------------
    // Volitelná, pro plynulejší přechod (již částečně řešeno v CSS)
    const menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach(link => {
        // Při najetí myši
        link.addEventListener("mouseenter", () => {
            link.style.transform = "translateY(-5px)";
        });
        // Při opuštění
        link.addEventListener("mouseleave", () => {
            // Pouze pokud není aktivní
            if (!link.classList.contains("active")) {
                link.style.transform = "translateY(0)";
            } else {
                // Mírný posun i pro aktivní odkaz (pro vizuální efekt)
                link.style.transform = "translateY(-2px)";
            }
        });
    });
});
