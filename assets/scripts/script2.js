// Sélection de tous les éléments de navigation et des sections correspondantes
const navItems = document.querySelectorAll(".li a");
const sections = document.querySelectorAll("section");

// Fonction pour mettre à jour la classe 'select' en fonction de l'élément cliqué
function updateSelection(clickedNavItem) {
    navItems.forEach(navItem => {
        navItem.classList.remove('select');
    });
    clickedNavItem.classList.add('select');
}

// Ajout des écouteurs d'événements pour chaque élément de navigation
navItems.forEach((navItem, index) => {
    navItem.addEventListener("click", () => {
        // Mise à jour de la classe 'select' pour l'élément cliqué
        updateSelection(navItem);
        // Affichage de la section correspondante
        sections.forEach(section => {
            section.style.display = "none";
        });
        sections[index].style.display = "block";
    });
});

function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className.indexOf("responsive") === -1) {
        x.className += " responsive";
    } else {
        x.className = x.className.replace(" responsive", "");
    }
}