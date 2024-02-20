// Sélection des éléments de la barre de navigation
const btnHome = document.querySelector(".btnHome");
const btnPresentation = document.querySelector(".btnPresentation");
const btnCompetence = document.querySelector(".btnCompetence");
const btnRealisation = document.querySelector(".btnRealisation");
const btnContact = document.querySelector(".btnContact");
const btnProjets = document.querySelector(".btnProjets");

// Sélection des sections correspondantes
const sectionHome = document.querySelector(".sectionHome");
const sectionPresentation = document.querySelector(".sectionPresentation");
const sectionCompetence = document.querySelector(".sectionCompetence");
const sectionRealisation = document.querySelector(".sectionRealisation");
const sectionContact = document.querySelector(".sectionContact");
const sectionProjets = document.querySelector(".sectionProjets");

// Écouteurs d'événements pour les différents liens de la barre de navigation
btnHome.addEventListener("click", () => {
  
  sectionHome.style.display = "block";
  sectionPresentation.style.display = "none";
  sectionCompetence.style.display = "none";
  sectionRealisation.style.display = "none";
  sectionContact.style.display = "none";
  sectionProjets.style.display = "none";

  btnHome.classList.add('active');
  btnPresentation.classList.remove('active');
  btnCompetence.classList.remove('active');
  btnRealisation.classList.remove('active');
  btnContact.classList.remove('active');
});

btnPresentation.addEventListener("click", () => {
  
  sectionHome.style.display = "none";
  sectionPresentation.style.display = "block";
  sectionCompetence.style.display = "none";
  sectionRealisation.style.display = "none";
  sectionContact.style.display = "none";
  sectionProjets.style.display = "none";

  btnHome.classList.remove('active');
  btnPresentation.classList.add('active');
  btnCompetence.classList.remove('active');
  btnRealisation.classList.remove('active');
  btnContact.classList.remove('active');
});

btnCompetence.addEventListener("click", () => {
  
  sectionHome.style.display = "none";
  sectionPresentation.style.display = "none";
  sectionCompetence.style.display = "block";
  sectionRealisation.style.display = "none";
  sectionContact.style.display = "none";
  sectionProjets.style.display = "none";
  
  btnHome.classList.remove('active');
  btnPresentation.classList.remove('active');
  btnCompetence.classList.add('active');
  btnRealisation.classList.remove('active');
  btnContact.classList.remove('active');
});

btnRealisation.addEventListener("click", () => {
  
  sectionHome.style.display = "none";
  sectionPresentation.style.display = "none";
  sectionCompetence.style.display = "none";
  sectionRealisation.style.display = "block";
  sectionContact.style.display = "none";
  sectionProjets.style.display = "none";

  btnHome.classList.remove('active');
  btnPresentation.classList.remove('active');
  btnCompetence.classList.remove('active');
  btnRealisation.classList.add('active');
  btnContact.classList.remove('active');
});

btnContact.addEventListener("click", () => {
  
  sectionHome.style.display = "none";
  sectionPresentation.style.display = "none";
  sectionCompetence.style.display = "none";
  sectionRealisation.style.display = "none";
  sectionContact.style.display = "block";
  sectionProjets.style.display = "none";

  btnHome.classList.remove('active');
  btnPresentation.classList.remove('active');
  btnCompetence.classList.remove('active');
  btnRealisation.classList.remove('active');
  btnContact.classList.add('active');
});

btnProjets.addEventListener("click", () => {
  
  sectionHome.style.display = "none";
  sectionPresentation.style.display = "none";
  sectionCompetence.style.display = "none";
  sectionRealisation.style.display = "none";
  sectionContact.style.display = "none";
  sectionProjets.style.display = "flex";

  btnHome.classList.remove('active');
  btnPresentation.classList.remove('active');
  btnCompetence.classList.remove('active');
  btnRealisation.classList.remove('active');
  btnContact.classList.remove('active');
});

// Sélection de la div wikiPhobia
const wikiPhobiaDiv = document.querySelector(".wikiPhobia");

// Ajout d'un événement de clic à la div
wikiPhobiaDiv.addEventListener("click", () => {
  // Redirection vers l'URL souhaitée
  window.location.href = "/WikiPhobia/index.html";
});

// Sélection de la div wikiPhobia
const combatAvengers = document.querySelector(".combatAvenger");

// Ajout d'un événement de clic à la div
combatAvengers.addEventListener("click", () => {
  // Redirection vers l'URL souhaitée
  window.location.href = "/CombatAvengers/index.html";
});

// Menu Responsive \\

// Fonction pour ajuster les classes en fonction de la largeur de l'écran
function adjustClasses() {
  var navbar = document.getElementById("myNavbar");
  var title = document.getElementById("title");

  if (isMobile()) {
    navbar.classList.remove("NavigationLayer");
    title.style.display = "none"; // Cacher la classe "title" sur mobile
  } else {
    navbar.classList.add("NavigationLayer");
    title.style.display = "block"; // Afficher la classe "title" sur desktop
  }
}

// Fonction appelée lors du clic sur l'icône du menu
function menuIconClicked() {
  var navbar = document.getElementById("myNavbar");
  if (navbar.className === "navbar") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navbar";
  }

  adjustClasses(); // Appel de la fonction pour ajuster les classes après avoir cliqué sur l'icône du menu
}

// Exécuter la fonction au chargement de la page et lors du redimensionnement de la fenêtre
window.onload = function() {
  adjustClasses(); // Appeler la fonction une fois au chargement de la page
  window.onresize = adjustClasses; // Appeler la fonction lors du redimensionnement de la fenêtre
}

function myFunction() {
  var x = document.getElementById("myNavbar");
  var title = document.getElementById("title");
  var hrElement = document.querySelector(".mobilResponvise");
  var footer = document.querySelector(".footer");

  if (x.className === "navbar") {
    x.className += " responsive";
    title.style.display = "none"; // Cacher la classe "title"
    hrElement.style.display = "none"; // Cacher le hr
    footer.style.display = "none"; // Cacher le hr
  } else {
    x.className = "navbar"; // Retirer la classe responsive
    title.style.display = "block"; // Afficher la classe "title"
    hrElement.style.display = "block"; // Afficher le hr
    footer.style.display = "block"; // Afficher le hr
  }
}

// Animation Thomas.| Menu \\

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};