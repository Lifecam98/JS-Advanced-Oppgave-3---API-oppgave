// Velger ut checkbox-elementet for tema-omstilling
const themeToggleCheckbox = document.querySelector(".darkmodeswitch input");

// Funksjon for å omstille tema (lys eller mørk)
const toggleTheme = (isChecked) => {
  // Hvis checkboxen er valgt, aktiverer vi mørk tema
  if (isChecked) {
    // Setter tema-attributt på dokumentets root-element til "dark"
    document.documentElement.setAttribute("theme", "dark");
    // Lagrer tema-valg i lokal lagring
    localStorage.setItem("theme", "dark");
    console.log("Dark theme activated");
  } else {
    // Hvis checkboxen ikke er valgt, aktiverer vi lys tema
    document.documentElement.setAttribute("theme", "light");
    localStorage.setItem("theme", "light");
    console.log("Light theme activated");
  }
};

// Funksjon for å laste inn tema-valg fra lokal lagring
const loadTheme = () => {
  // Henter tema-valg fra lokal lagring
  const savedTheme = localStorage.getItem("theme");

  // Hvis tema-valg er lagret, setter vi checkboxen og aktiverer tema
  if (savedTheme) {
    themeToggleCheckbox.checked = savedTheme === "dark";
    toggleTheme(themeToggleCheckbox.checked);
  } else if (
    // Hvis brukeren har valgt å bruke systemets tema-preferanser
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    // Aktiverer mørk tema hvis systemet foretrekker mørk tema
    themeToggleCheckbox.checked = true;
    toggleTheme(true);
  } else {
    // Hvis ingen tema-valg er lagret eller systemet foretrekker lys tema, aktiverer vi lys tema
    themeToggleCheckbox.checked = false;
    toggleTheme(false);
  }
};

// Lytter på endringer i checkboxen og omstiller tema hvis nødvendig
themeToggleCheckbox.addEventListener("change", () => {
  toggleTheme(themeToggleCheckbox.checked);
});

// Laster inn tema-valg når siden lastes
loadTheme();
