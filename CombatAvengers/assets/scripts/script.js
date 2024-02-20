let data = {
  ironMan: {
    nom: "Iron Man",
    hp: 100,
    atk: 8,
    special: (player) => {
      if (player === "player1") {
        return (player2.hp = player2.hp - 10);
      }
      if (player === "player2") {
        return (player1.hp = player1.hp - 10);
      }
    },
  },
  blackPanther: {
    nom: "Black Panther",
    hp: 100,
    atk: 10,
    special: (player) => {
      if (player === "player1") {
        return (player2.hp = player2.hp - 15);
      }
      if (player === "player2") {
        return (player1.hp = player1.hp - 15);
      }
    },
  },
  antMan: {
    nom: "Ant Man",
    hp: 80,
    atk: 5,
    special: (player) => {
      if (player === "player1") {
        return (player2.hp = player2.hp - 20);
      }
      if (player === "player2") {
        return (player1.hp = player1.hp - 20);
      }
    },
  },
  blueBeetle: {
    nom: "Blue Beetle",
    hp: 90,
    atk: 15,
    special: (player) => {
      if (player === "player1") {
        return (player2.hp = player2.hp - 5);
      }
      if (player === "player2") {
        return (player1.hp = player1.hp - 5);
      }
    },
  },
};
const reloadButton = document.querySelector("button#reload");

const btnCombatValid = document.querySelector(".btnCombatValid");
const combatValid = document.querySelector(".combatValid");
const combatValidG = document.querySelector(".combatValidGauche");
const combatValidD = document.querySelector(".combatValidDroite");

const btnStartIronmanG = document.querySelector(".gaucheIronman");
const btnStartPantherG = document.querySelector(".gauchePanther");
const btnStartAntmanG = document.querySelector(".gaucheAntman");
const btnStartBeetleG = document.querySelector(".gaucheBluebeetle");

const btnStartIronmanD = document.querySelector(".droiteIronman");
const btnStartPantherD = document.querySelector(".droitePanther");
const btnStartAntmanD = document.querySelector(".droiteAntman");
const btnStartBeetleD = document.querySelector(".droiteBluebeetle");

const selectChampion = document.querySelector(".selectChampion");
const selectionGauche = document.querySelector(".selectGauche");
const selectionDroite = document.querySelector(".selectDroite");

const combatChampion = document.querySelector(".combatChampion");
const combatGauche = document.querySelector(".combatGauche");
const combatDroite = document.querySelector(".combatDroite");
const imgCombatGauche = document.querySelector(".imgCombatGauche");
const imgCombatDroite = document.querySelector(".imgCombatDroite");

const imgWin = document.querySelector(".imgVersus");

const characterNameOne = document.querySelector(".characterNameOne");
const characterNameTwo = document.querySelector(".characterNameTwo");

const btnAtkG = document.querySelector(".btnAttaqueGauche");
const btnSpeG = document.querySelector(".btnCapaGauche");

const btnAtkD = document.querySelector(".btnAttaqueDroite");
const btnSpeD = document.querySelector(".btnCapaDroite");

const dataHealth1 = document.querySelector(".playerHealthOne");
let dataHealthOne;

const dataHealth2 = document.querySelector(".playerHealthTwo");
let dataHealthTwo;

let player1;
let player2;

btnStartIronmanG.addEventListener("click", () => {
  selectionGauche.style.display = "none";
  selectionDroite.style.display = "flex";
  combatValidG.src = "assets/img/ironman.png";
  player1 = data.ironMan;
  dataHealthOne = data.ironMan.hp;
});

btnStartPantherG.addEventListener("click", () => {
  selectionGauche.style.display = "none";
  selectionDroite.style.display = "flex";
  combatValidG.src = "assets/img/blackpanther.png";
  player1 = data.blackPanther;
  dataHealthOne = data.blackPanther.hp;
});

btnStartAntmanG.addEventListener("click", () => {
  selectionGauche.style.display = "none";
  selectionDroite.style.display = "flex";
  combatValidG.src = "assets/img/antman.png";
  player1 = data.antMan;
  dataHealthOne = data.antMan.hp;
});

btnStartBeetleG.addEventListener("click", () => {
  selectionGauche.style.display = "none";
  selectionDroite.style.display = "flex";
  combatValidG.src = "assets/img/bluebeetle.png";
  player1 = data.blueBeetle;
  dataHealthOne = data.blueBeetle.hp;
});

btnStartIronmanD.addEventListener("click", () => {
  selectionDroite.style.display = "none";
  selectChampion.style.display = "none";
  combatValid.style.display = "flex";
  combatValidD.src = "assets/img/ironman.png";
  player2 = data.ironMan;
  dataHealthTwo = data.ironMan.hp;
});

btnStartPantherD.addEventListener("click", () => {
  selectionDroite.style.display = "none";
  selectChampion.style.display = "none";
  combatValid.style.display = "flex";
  combatValidD.src = "assets/img/blackpanther.png";
  player2 = data.blackPanther;
  dataHealthTwo = data.blackPanther.hp;
});

btnStartAntmanD.addEventListener("click", () => {
  selectionDroite.style.display = "none";
  selectChampion.style.display = "none";
  combatValid.style.display = "flex";
  combatValidD.src = "assets/img/antman.png";
  player2 = data.antMan;
  dataHealthTwo = data.antMan.hp;
});

btnStartBeetleD.addEventListener("click", () => {
  selectionDroite.style.display = "none";
  selectChampion.style.display = "none";
  combatValid.style.display = "flex";
  combatValidD.src = "assets/img/bluebeetle.png";
  player2 = data.blueBeetle;
  dataHealthTwo = data.blueBeetle.hp;
});

btnCombatValid.addEventListener("click", () => {
  selectChampion.style.display = "none";
  combatValid.style.display = "none";
  combatChampion.style.display = "flex";
  imgCombatDroite.src = combatValidD.src;
  imgCombatGauche.src = combatValidG.src;
  dataHealth1.textContent = `Health : ${dataHealthOne}`;
  dataHealth2.textContent = `Health : ${dataHealthTwo}`;
  characterNameOne.textContent = player1.nom;
  characterNameTwo.textContent = player2.nom;
});

btnAtkG.addEventListener("click", () => {
  player2.hp = player2.hp - player1.atk;
  dataHealth2.textContent = `Health : ${player2.hp}`;
  btnAtkG.disabled = true;
  btnSpeG.disabled = true;
  btnAtkD.disabled = false;
  btnSpeD.disabled = false;

  if (player2.hp <= 0) {
    btnAtkD.disabled = true;
    btnSpeD.disabled = true;
    btnAtkG.disabled = true;
    btnSpeG.disabled = true;
    imgWin.src = "assets/img/winner1.png";
  }
});

btnAtkD.addEventListener("click", () => {
  player1.hp = player1.hp - player2.atk;
  dataHealth1.textContent = `Health : ${player1.hp}`;
  btnAtkG.disabled = false;
  btnSpeG.disabled = false;
  btnAtkD.disabled = true;
  btnSpeD.disabled = true;

  if (player1.hp <= 0) {
    btnAtkD.disabled = true;
    btnSpeD.disabled = true;
    btnAtkG.disabled = true;
    btnSpeG.disabled = true;
    imgWin.src = "assets/img/winner2.png";
  }
});

btnSpeG.addEventListener("click", () => {
  player1.special("player1");
  dataHealth2.textContent = `Health : ${player2.hp}`;
  btnAtkG.disabled = true;
  btnSpeG.disabled = true;
  btnAtkD.disabled = false;
  btnSpeD.disabled = false;

  if (player2.hp <= 0) {
    btnAtkD.disabled = true;
    btnSpeD.disabled = true;
    btnAtkG.disabled = true;
    btnSpeG.disabled = true;
    imgWin.src = "assets/img/winner1.png";
  }
});

btnSpeD.addEventListener("click", () => {
  player2.special("player2");
  dataHealth1.textContent = `Health : ${player1.hp}`;
  btnAtkG.disabled = false;
  btnSpeG.disabled = false;
  btnAtkD.disabled = true;
  btnSpeD.disabled = true;

  if (player1.hp <= 0) {
    btnAtkD.disabled = true;
    btnSpeD.disabled = true;
    btnAtkG.disabled = true;
    btnSpeG.disabled = true;
    imgWin.src = "assets/img/winner2.png";
  }
});
