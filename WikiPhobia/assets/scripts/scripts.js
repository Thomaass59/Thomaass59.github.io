// Menu Responsive \\

const btnNavMenu = document.querySelector(".navBarResp");
const navBarMenu = document.querySelector(".navBarMenu");

btnNavMenu.addEventListener("click", () => {
  navBarMenu.style.display = "block";
});

// ------------------------- \\
const btnHome = document.querySelector(".btnHome");
const btnGhost = document.querySelector(".btnGhost");
const btnObject = document.querySelector(".btnObject");
const btnMap = document.querySelector(".btnMap");
const btnEvidence = document.querySelector(".btnEvidence");

const sectionHome = document.querySelector(".sectionHome");
const sectionGhost = document.querySelector(".sectionGhost");
const sectionObject = document.querySelector(".sectionObject");
const sectionMap = document.querySelector(".sectionMap");
const sectionEvidence = document.querySelector(".sectionEvidence");

btnHome.addEventListener("click", () => {
  sectionHome.style.display = "block";
  sectionGhost.style.display = "none";
  sectionObject.style.display = "none";
  sectionMap.style.display = "none";
  sectionEvidence.style.display = "none";

  modalBriquet.style.display = "none";
  modalFlashlight.style.display = "none";
  modalCandle.style.display = "none";
  modalPhoto.style.display = "none";
  modalIncense.style.display = "none";
  modalMotionsensor.style.display = "none";
  modalSoundsensor.style.display = "none";
  modalDots.style.display = "none";
  modalUv.style.display = "none";
  modalCrucifix.style.display = "none";
  modalSpiritbox.style.display = "none";
  modalThermometer.style.display = "none";
});

btnGhost.addEventListener("click", () => {
  sectionHome.style.display = "none";
  sectionGhost.style.display = "flex";
  sectionObject.style.display = "none";
  sectionMap.style.display = "none";
  sectionEvidence.style.display = "none";

  modalBriquet.style.display = "none";
  modalFlashlight.style.display = "none";
  modalCandle.style.display = "none";
  modalPhoto.style.display = "none";
  modalIncense.style.display = "none";
  modalMotionsensor.style.display = "none";
  modalSoundsensor.style.display = "none";
  modalDots.style.display = "none";
  modalUv.style.display = "none";
  modalCrucifix.style.display = "none";
  modalSpiritbox.style.display = "none";
  modalThermometer.style.display = "none";
});

btnObject.addEventListener("click", () => {
  sectionObject.style.display = "block";
  sectionHome.style.display = "none";
  sectionGhost.style.display = "none";
  sectionMap.style.display = "none";
  sectionEvidence.style.display = "none";
});

btnMap.addEventListener("click", () => {
  sectionHome.style.display = "none";
  sectionGhost.style.display = "none";
  sectionObject.style.display = "none";
  sectionMap.style.display = "block";
  sectionEvidence.style.display = "none";

  modalBriquet.style.display = "none";
  modalFlashlight.style.display = "none";
  modalCandle.style.display = "none";
  modalPhoto.style.display = "none";
  modalIncense.style.display = "none";
  modalMotionsensor.style.display = "none";
  modalSoundsensor.style.display = "none";
  modalDots.style.display = "none";
  modalUv.style.display = "none";
  modalCrucifix.style.display = "none";
  modalSpiritbox.style.display = "none";
  modalThermometer.style.display = "none";
});

btnEvidence.addEventListener("click", () => {
  sectionHome.style.display = "none";
  sectionGhost.style.display = "none";
  sectionObject.style.display = "none";
  sectionMap.style.display = "none";
  sectionEvidence.style.display = "block";

  modalBriquet.style.display = "none";
  modalFlashlight.style.display = "none";
  modalCandle.style.display = "none";
  modalPhoto.style.display = "none";
  modalIncense.style.display = "none";
  modalMotionsensor.style.display = "none";
  modalSoundsensor.style.display = "none";
  modalDots.style.display = "none";
  modalUv.style.display = "none";
  modalCrucifix.style.display = "none";
  modalSpiritbox.style.display = "none";
  modalThermometer.style.display = "none";
});

// MODAL FANTOME \\

// Modal Deogen
const modalDeo = document.getElementById("myModalDeo");
const imgDeo = document.getElementById("modalDeo");
imgDeo.onclick = function () {
  modalDeo.style.display = "block";
};
const span = document.getElementsByClassName("closeDeo")[0];
span.onclick = function () {
  modalDeo.style.display = "none";
};

// Modal Hantu
const modalHantu = document.getElementById("myModalHantu");
const imgHantu = document.getElementById("modalHantu");
imgHantu.onclick = function () {
  modalHantu.style.display = "block";
};
const spanHantu = document.getElementsByClassName("closeHantu")[0];
spanHantu.onclick = function () {
  modalHantu.style.display = "none";
};

// Modal Mare
const modalMare = document.getElementById("myModalMare");
const imgMare = document.getElementById("modalMare");
imgMare.onclick = function () {
  modalMare.style.display = "block";
};
const spanMare = document.getElementsByClassName("closeMare")[0];
spanMare.onclick = function () {
  modalMare.style.display = "none";
};

// Modal Banshee
const modalBanshee = document.getElementById("myModalBanshee");
const imgBanshee = document.getElementById("modalBanshee");
imgBanshee.onclick = function () {
  modalBanshee.style.display = "block";
};
const spanBanshee = document.getElementsByClassName("closeBanshee")[0];
spanBanshee.onclick = function () {
  modalBanshee.style.display = "none";
};

// Modal Demon
const modalDemon = document.getElementById("myModalDemon");
const imgDemon = document.getElementById("modalDemon");
imgDemon.onclick = function () {
  modalDemon.style.display = "block";
};
const spanDemon = document.getElementsByClassName("closeDemon")[0];
spanDemon.onclick = function () {
  modalDemon.style.display = "none";
};

// Modal Djinn
const modalDjinn = document.getElementById("myModalDjinn");
const imgDjinn = document.getElementById("modalDjinn");
imgDjinn.onclick = function () {
  modalDjinn.style.display = "block";
};
const spanDjinn = document.getElementsByClassName("closeDjinn")[0];
spanDjinn.onclick = function () {
  modalDjinn.style.display = "none";
};

// Modal Spirit
const modalSpirit = document.getElementById("myModalSpirit");
const imgSpirit = document.getElementById("modalSpirit");
imgSpirit.onclick = function () {
  modalSpirit.style.display = "block";
};
const spanSpirit = document.getElementsByClassName("closeSpirit")[0];
spanSpirit.onclick = function () {
  modalSpirit.style.display = "none";
};

// Modal Phantom
const modalPhantom = document.getElementById("myModalPhantom");
const imgPhantom = document.getElementById("modalPhantom");
imgPhantom.onclick = function () {
  modalPhantom.style.display = "block";
};
const spanPhantom = document.getElementsByClassName("close4")[0];
spanPhantom.onclick = function () {
  modalPhantom.style.display = "none";
};

// Modal Goryo
const modalGoryo = document.getElementById("myModalGoryo");
const imgGoryo = document.getElementById("modalGoryo");
imgGoryo.onclick = function () {
  modalGoryo.style.display = "block";
};
const spanGoryo = document.getElementsByClassName("closeGoryo")[0];
spanGoryo.onclick = function () {
  modalGoryo.style.display = "none";
};

// Modal Twin
const modalTwin = document.getElementById("myModalTwin");
const imgTwin = document.getElementById("modalTwin");
imgTwin.onclick = function () {
  modalTwin.style.display = "block";
};
const spanTwin = document.getElementsByClassName("closeTwin")[0];
spanTwin.onclick = function () {
  modalTwin.style.display = "none";
};

// Modal Mimic
const modalMimic = document.getElementById("myModalMimic");
const imgMimic = document.getElementById("modalMimic");
imgMimic.onclick = function () {
  modalMimic.style.display = "block";
};
const spanMimic = document.getElementsByClassName("closeMimic")[0];
spanMimic.onclick = function () {
  modalMimic.style.display = "none";
};

// Modal Moroi
const modalMoroi = document.getElementById("myModalMoroi");
const imgMoroi = document.getElementById("modalMoroi");
imgMoroi.onclick = function () {
  modalMoroi.style.display = "block";
};
const spanMoroi = document.getElementsByClassName("closeMoroi")[0];
spanMoroi.onclick = function () {
  modalMoroi.style.display = "none";
};

// Modal Myling
const modalMyling = document.getElementById("myModalMyling");
const imgMyling = document.getElementById("modalMyling");
imgMyling.onclick = function () {
  modalMyling.style.display = "block";
};
const spanMyling = document.getElementsByClassName("closeMyling")[0];
spanMyling.onclick = function () {
  modalMyling.style.display = "none";
};

// Modal Shadow
const modalShadow = document.getElementById("myModalShadow");
const imgShadow = document.getElementById("modalShadow");
imgShadow.onclick = function () {
  modalShadow.style.display = "block";
};
const spanShadow = document.getElementsByClassName("closeShadow")[0];
spanShadow.onclick = function () {
  modalShadow.style.display = "none";
};

// Modal Oni
const modalOni = document.getElementById("myModalOni");
const imgOni = document.getElementById("modalOni");
imgOni.onclick = function () {
  modalOni.style.display = "block";
};
const spanOni = document.getElementsByClassName("closeOni")[0];
spanOni.onclick = function () {
  modalOni.style.display = "none";
};

// Modal Onryo
const modalOnryo = document.getElementById("myModalOnryo");
const imgOnryo = document.getElementById("modalOnryo");
imgOnryo.onclick = function () {
  modalOnryo.style.display = "block";
};
const spanOnryo = document.getElementsByClassName("closeOnryo")[0];
spanOnryo.onclick = function () {
  modalOnryo.style.display = "none";
};

// Modal Poltergeist
const modalPoltergeist = document.getElementById("myModalPoltergeist");
const imgPoltergeist = document.getElementById("modalPoltergeist");
imgPoltergeist.onclick = function () {
  modalPoltergeist.style.display = "block";
};
const spanPoltergeist = document.getElementsByClassName("closePoltergeist")[0];
spanPoltergeist.onclick = function () {
  modalPoltergeist.style.display = "none";
};

// Modal Raiju
const modalRaiju = document.getElementById("myModalRaiju");
const imgRaiju = document.getElementById("modalRaiju");
imgRaiju.onclick = function () {
  modalRaiju.style.display = "block";
};
const spanRaiju = document.getElementsByClassName("closeRaiju")[0];
spanRaiju.onclick = function () {
  modalRaiju.style.display = "none";
};

// Modal Revenant
const modalRevenant = document.getElementById("myModalRevenant");
const imgRevenant = document.getElementById("modalRevenant");
imgRevenant.onclick = function () {
  modalRevenant.style.display = "block";
};
const spanRevenant = document.getElementsByClassName("closeRevenant")[0];
spanRevenant.onclick = function () {
  modalRevenant.style.display = "none";
};

// Modal Wraith
const modalWraith = document.getElementById("myModalWraith");
const imgWraith = document.getElementById("modalWraith");
imgWraith.onclick = function () {
  modalWraith.style.display = "block";
};
const spanWraith = document.getElementsByClassName("closeWraith")[0];
spanWraith.onclick = function () {
  modalWraith.style.display = "none";
};

// Modal Thaye
const modalThaye = document.getElementById("myModalThaye");
const imgThaye = document.getElementById("modalThaye");
imgThaye.onclick = function () {
  modalThaye.style.display = "block";
};
const spanThaye = document.getElementsByClassName("closeThaye")[0];
spanThaye.onclick = function () {
  modalThaye.style.display = "none";
};

// Modal Yokai
const modalYokai = document.getElementById("myModalYokai");
const imgYokai = document.getElementById("modalYokai");
imgYokai.onclick = function () {
  modalYokai.style.display = "block";
};
const spanYokai = document.getElementsByClassName("closeYokai")[0];
spanYokai.onclick = function () {
  modalYokai.style.display = "none";
};

// Modal Yurei
const modalYurei = document.getElementById("myModalYurei");
const imgYurei = document.getElementById("modalYurei");
imgYurei.onclick = function () {
  modalYurei.style.display = "block";
};
const spanYurei = document.getElementsByClassName("closeYurei")[0];
spanYurei.onclick = function () {
  modalYurei.style.display = "none";
};
// Modal Obake
const modalObake = document.getElementById("myModalObake");
const imgObake = document.getElementById("modalObake");
imgObake.onclick = function () {
  modalObake.style.display = "block";
};
const spanObake = document.getElementsByClassName("closeObake")[0];
spanObake.onclick = function () {
  modalObake.style.display = "none";
};

// Objects \\

const btnFlashlight = document.querySelector(".btnFlashlight");
const btnBriquet = document.querySelector(".btnBriquet");
const btnCandle = document.querySelector(".btnCandle");
const btnPhoto = document.querySelector(".btnPhoto");
const btnIncense = document.querySelector(".btnIncense");
const btnTripod = document.querySelector(".btnTripod");
const btnMotionsensor = document.querySelector(".btnMotionsensor");
const btnSoundsensor = document.querySelector(".btnSoundsensor");
const btnMedication = document.querySelector(".btnMedication");
const btnHeadgear = document.querySelector(".btnHeadgear");
const btnCamera = document.querySelector(".btnCamera");
const btnSalt = document.querySelector(".btnSalt");
const btnDots = document.querySelector(".btnDots");
const btnEmf = document.querySelector(".btnEmf");
const btnUv = document.querySelector(".btnUv");
const btnCrucifix = document.querySelector(".btnCrucifix");
const btnSpiritbox = document.querySelector(".btnSpiritbox");
const btnThermometer = document.querySelector(".btnThermometer");
const btnWritingbook = document.querySelector(".btnWritingbook");
const btnMicrophone = document.querySelector(".btnMicrophone");

const modalFlashlight = document.querySelector(".modalFlashlight");
const modalBriquet = document.querySelector(".modalBriquet");
const modalCandle = document.querySelector(".modalCandle");
const modalPhoto = document.querySelector(".modalPhoto");
const modalIncense = document.querySelector(".modalIncense");
const modalTripod = document.querySelector(".modalTripod");
const modalMotionsensor = document.querySelector(".modalMotionsensor");
const modalSoundsensor = document.querySelector(".modalSoundsensor");
const modalMedication = document.querySelector(".modalMedication");
const modalHeadgear = document.querySelector(".modalHeadgear");
const modalCamera = document.querySelector(".modalCamera");
const modalSalt = document.querySelector(".modalSalt");
const modalDots = document.querySelector(".modalDots");
const modalEmf = document.querySelector(".modalEmf");
const modalUv = document.querySelector(".modalUv");
const modalCrucifix = document.querySelector(".modalCrucifix");
const modalSpiritbox = document.querySelector(".modalSpiritbox");
const modalThermometer = document.querySelector(".modalThermometer");
const modalWritingbook = document.querySelector(".modalWritingbook");
const modalMicrophone = document.querySelector(".modalMicrophone");

const objectMaudits = document.querySelector(".objectMaudits");
const tableau = document.querySelector(".tableEquipment");

const btnExit = document.querySelector(".exit");
const btnExitBriquet = document.querySelector(".exitBriquet");
const btnExitCandle = document.querySelector(".exitCandle");
const btnExitPhoto = document.querySelector(".exitPhoto");
const btnExitIncense = document.querySelector(".exitIncense");
const btnExitTripod = document.querySelector(".exitTripod");
const btnExitMotionsensor = document.querySelector(".exitMotionsensor");
const btnExitSoundsensor = document.querySelector(".exitSoundsensor");
const btnExitMedication = document.querySelector(".exitMedication");
const btnExitHeadgear = document.querySelector(".exitHeadgear");
const btnExitCamera = document.querySelector(".exitCamera");
const btnExitSalt = document.querySelector(".exitSalt");
const btnExitDots = document.querySelector(".exitDots");
const btnExitEmf = document.querySelector(".exitEmf");
const btnExitUv = document.querySelector(".exitUv");
const btnExitCrucifix = document.querySelector(".exitCrucifix");
const btnExitSpiritbox = document.querySelector(".exitSpiritbox");
const btnExitThermometer = document.querySelector(".exitThermometer");
const btnExitWritingbook = document.querySelector(".exitWritingbook");
const btnExitMicrophone = document.querySelector(".exitMicrophone");

// Fonction pour afficher la modal et gérer le bouton de sortie
function afficherModal(modal, boutonSortie) {
  modal.style.display = "flex";
  tableau.style.display = "none";
  objectMaudits.style.display = "none";
  sectionObject.style.display = "none";

  // Ajout d'un écouteur d'événements au bouton de sortie
  boutonSortie.addEventListener("click", () => {
    tableau.style.display = "block";
    sectionObject.style.display = "block";
    modal.style.display = "none";
    objectMaudits.style.display = "block";
  });
}

// Ajouter des écouteurs d'événements en utilisant la fonction
btnFlashlight.addEventListener("click", () => afficherModal(modalFlashlight, btnExit));
btnBriquet.addEventListener("click", () => afficherModal(modalBriquet, btnExitBriquet));
btnCandle.addEventListener("click", () => afficherModal(modalCandle, btnExitCandle));
btnPhoto.addEventListener("click", () => afficherModal(modalPhoto, btnExitPhoto));
btnIncense.addEventListener("click", () => afficherModal(modalIncense, btnExitIncense));
btnTripod.addEventListener("click", () => afficherModal(modalTripod, btnExitTripod));
btnMotionsensor.addEventListener("click", () => afficherModal(modalMotionsensor, btnExitMotionsensor));
btnSoundsensor.addEventListener("click", () => afficherModal(modalSoundsensor, btnExitSoundsensor));
btnMedication.addEventListener("click", () => afficherModal(modalMedication, btnExitMedication));
btnHeadgear.addEventListener("click", () => afficherModal(modalHeadgear, btnExitHeadgear));
btnCamera.addEventListener("click", () => afficherModal(modalCamera, btnExitCamera));
btnSalt.addEventListener("click", () => afficherModal(modalSalt, btnExitSalt));
btnDots.addEventListener("click", () => afficherModal(modalDots, btnExitDots));
btnEmf.addEventListener("click", () => afficherModal(modalEmf, btnExitEmf));
btnUv.addEventListener("click", () => afficherModal(modalUv, btnExitUv));
btnCrucifix.addEventListener("click", () => afficherModal(modalCrucifix, btnExitCrucifix));
btnSpiritbox.addEventListener("click", () => afficherModal(modalSpiritbox, btnExitSpiritbox));

const tierFlashLightThree = document.querySelector(".tierFlashLightThree");
const tierFlashLightTwo = document.querySelector(".tierFlashLightTwo");
const tierFlashLightOne = document.querySelector(".tierFlashLightOne");

const flashTierOneOne = document.querySelector(".flashTierOneOne");
const flashTierTwoTwo = document.querySelector(".flashTierTwoTwo");
const flashTierThreeThree = document.querySelector(".flashTierThreeThree");

const flashLight1 = document.getElementById("flashLight1");
const flashLight2 = document.getElementById("flashLight2");
const flashLight3 = document.getElementById("flashLight3");

const flashTierOne = document.querySelector(".flashTierOne");
const flashTierTwo = document.querySelector(".flashTierTwo");
const flashTierThree = document.querySelector(".flashTierThree");

tierFlashLightTwo.addEventListener("click", (e) => {
  flashTierTwo.style.display = "block";
  flashTierTwoTwo.style.display = "block";
  flashLight2.classList.add("flashLigtCurrent");

  flashTierThree.style.display = "none";
  flashLight3.classList.remove("flashLigtCurrent");
  flashTierThreeThree.style.display = "none";

  flashTierOne.style.display = "none";
  flashTierOneOne.style.display = "none";
  flashLight1.classList.remove("flashLigtCurrent");
});

tierFlashLightOne.addEventListener("click", (e) => {
  flashTierOne.style.display = "block";
  flashLight1.classList.add("flashLigtCurrent");
  flashTierOneOne.style.display = "block";

  flashLight2.classList.remove("flashLigtCurrent");
  flashTierTwo.style.display = "none";
  flashTierTwoTwo.style.display = "none";

  flashLight3.classList.remove("flashLigtCurrent");
  flashTierThree.style.display = "none";
  flashTierThreeThree.style.display = "none";
});

tierFlashLightThree.addEventListener("click", (e) => {
  flashTierThree.style.display = "block";
  flashTierThreeThree.style.display = "block";
  flashLight3.classList.add("flashLigtCurrent");

  flashTierTwo.style.display = "none";
  flashTierTwoTwo.style.display = "none";
  flashLight2.classList.remove("flashLigtCurrent");

  flashLight1.classList.remove("flashLigtCurrent");
  flashTierOne.style.display = "none";
  flashTierOneOne.style.display = "none";
});

const tierIgniterThree = document.querySelector(".tierIgniterThree");
const tierIgniterTwo = document.querySelector(".tierIgniterTwo");
const tierIgniterOne = document.querySelector(".tierIgniterOne");

const igniterTierOneOne = document.querySelector(".igniterTierOneOne");
const igniterTierTwoTwo = document.querySelector(".igniterTierTwoTwo");
const igniterTierThreeThree = document.querySelector(".igniterTierThreeThree");

const igniter1 = document.getElementById("igniter1");
const igniter2 = document.getElementById("igniter2");
const igniter3 = document.getElementById("igniter3");

const igniterTierOne = document.querySelector(".igniterTierOne");
const igniterTierTwo = document.querySelector(".igniterTierTwo");
const igniterTierThree = document.querySelector(".igniterTierThree");

tierIgniterTwo.addEventListener("click", (e) => {
  igniterTierTwo.style.display = "block";
  igniterTierTwoTwo.style.display = "block";
  igniter2.classList.add("flashLigtCurrent");

  igniterTierThree.style.display = "none";
  igniter3.classList.remove("flashLigtCurrent");
  igniterTierThreeThree.style.display = "none";

  igniterTierOne.style.display = "none";
  igniterTierOneOne.style.display = "none";
  igniter1.classList.remove("flashLigtCurrent");
});

tierIgniterOne.addEventListener("click", (e) => {
  igniterTierOne.style.display = "block";
  igniter1.classList.add("flashLigtCurrent");
  igniterTierOneOne.style.display = "block";

  igniter2.classList.remove("flashLigtCurrent");
  igniterTierTwo.style.display = "none";
  igniterTierTwoTwo.style.display = "none";

  igniter3.classList.remove("flashLigtCurrent");
  igniterTierThree.style.display = "none";
  igniterTierThreeThree.style.display = "none";
});

tierIgniterThree.addEventListener("click", (e) => {
  igniterTierThree.style.display = "block";
  igniterTierThreeThree.style.display = "block";
  igniter3.classList.add("flashLigtCurrent");

  igniterTierTwo.style.display = "none";
  igniterTierTwoTwo.style.display = "none";
  igniter2.classList.remove("flashLigtCurrent");

  igniter1.classList.remove("flashLigtCurrent");
  igniterTierOne.style.display = "none";
  igniterTierOneOne.style.display = "none";
});

const tierCandleThree = document.querySelector(".tierCandleThree");
const tierCandleTwo = document.querySelector(".tierCandleTwo");
const tierCandleOne = document.querySelector(".tierCandleOne");

const candleTierOneOne = document.querySelector(".candleTierOneOne");
const candleTierTwoTwo = document.querySelector(".candleTierTwoTwo");
const candleTierThreeThree = document.querySelector(".candleTierThreeThree");

const candle1 = document.getElementById("candle1");
const candle2 = document.getElementById("candle2");
const candle3 = document.getElementById("candle3");

const candleTierOne = document.querySelector(".candleTierOne");
const candleTierTwo = document.querySelector(".candleTierTwo");
const candleTierThree = document.querySelector(".candleTierThree");

tierCandleTwo.addEventListener("click", (e) => {
  candleTierTwo.style.display = "block";
  candleTierTwoTwo.style.display = "block";
  candle2.classList.add("flashLigtCurrent");

  candleTierThree.style.display = "none";
  candle3.classList.remove("flashLigtCurrent");
  candleTierThreeThree.style.display = "none";

  candleTierOne.style.display = "none";
  candleTierOneOne.style.display = "none";
  candle1.classList.remove("flashLigtCurrent");
});

tierCandleOne.addEventListener("click", (e) => {
  candleTierOne.style.display = "block";
  candle1.classList.add("flashLigtCurrent");
  candleTierOneOne.style.display = "block";

  candle2.classList.remove("flashLigtCurrent");
  candleTierTwo.style.display = "none";
  candleTierTwoTwo.style.display = "none";

  candle3.classList.remove("flashLigtCurrent");
  candleTierThree.style.display = "none";
  candleTierThreeThree.style.display = "none";
});

tierCandleThree.addEventListener("click", (e) => {
  candleTierThree.style.display = "block";
  candleTierThreeThree.style.display = "block";
  candle3.classList.add("flashLigtCurrent");

  candleTierTwo.style.display = "none";
  candleTierTwoTwo.style.display = "none";
  candle2.classList.remove("flashLigtCurrent");

  candle1.classList.remove("flashLigtCurrent");
  candleTierOne.style.display = "none";
  candleTierOneOne.style.display = "none";
});

const tierPhotoThree = document.querySelector(".tierPhotoThree");
const tierPhotoTwo = document.querySelector(".tierPhotoTwo");
const tierPhotoOne = document.querySelector(".tierPhotoOne");

const photoTierOneOne = document.querySelector(".photoTierOneOne");
const photoTierTwoTwo = document.querySelector(".photoTierTwoTwo");
const photoTierThreeThree = document.querySelector(".photoTierThreeThree");

const photo1 = document.getElementById("photo1");
const photo2 = document.getElementById("photo2");
const photo3 = document.getElementById("photo3");

const photoTierOne = document.querySelector(".photoTierOne");
const photoTierTwo = document.querySelector(".photoTierTwo");
const photoTierThree = document.querySelector(".photoTierThree");

tierPhotoTwo.addEventListener("click", (e) => {
  photoTierTwo.style.display = "block";
  photoTierTwoTwo.style.display = "block";
  photo2.classList.add("flashLigtCurrent");

  photoTierThree.style.display = "none";
  photo3.classList.remove("flashLigtCurrent");
  photoTierThreeThree.style.display = "none";

  photoTierOne.style.display = "none";
  photoTierOneOne.style.display = "none";
  photo1.classList.remove("flashLigtCurrent");
});

tierPhotoOne.addEventListener("click", (e) => {
  photoTierOne.style.display = "block";
  photo1.classList.add("flashLigtCurrent");
  photoTierOneOne.style.display = "block";

  photo2.classList.remove("flashLigtCurrent");
  photoTierTwo.style.display = "none";
  photoTierTwoTwo.style.display = "none";

  photo3.classList.remove("flashLigtCurrent");
  photoTierThree.style.display = "none";
  photoTierThreeThree.style.display = "none";
});

tierPhotoThree.addEventListener("click", (e) => {
  photoTierThree.style.display = "block";
  photoTierThreeThree.style.display = "block";
  photo3.classList.add("flashLigtCurrent");

  photoTierTwo.style.display = "none";
  photoTierTwoTwo.style.display = "none";
  photo2.classList.remove("flashLigtCurrent");

  photo1.classList.remove("flashLigtCurrent");
  photoTierOne.style.display = "none";
  photoTierOneOne.style.display = "none";
});

const tierIncenseThree = document.querySelector(".tierIncenseThree");
const tierIncenseTwo = document.querySelector(".tierIncenseTwo");
const tierIncenseOne = document.querySelector(".tierIncenseOne");

const incenseTierOneOne = document.querySelector(".incenseTierOneOne");
const incenseTierTwoTwo = document.querySelector(".incenseTierTwoTwo");
const incenseTierThreeThree = document.querySelector(".incenseTierThreeThree");

const incense1 = document.getElementById("incense1");
const incense2 = document.getElementById("incense2");
const incense3 = document.getElementById("incense3");

const incenseTierOne = document.querySelector(".incenseTierOne");
const incenseTierTwo = document.querySelector(".incenseTierTwo");
const incenseTierThree = document.querySelector(".incenseTierThree");

tierIncenseTwo.addEventListener("click", (e) => {
  incenseTierTwo.style.display = "block";
  incenseTierTwoTwo.style.display = "block";
  incense2.classList.add("flashLigtCurrent");

  incenseTierThree.style.display = "none";
  incense3.classList.remove("flashLigtCurrent");
  incenseTierThreeThree.style.display = "none";

  incenseTierOne.style.display = "none";
  incenseTierOneOne.style.display = "none";
  incense1.classList.remove("flashLigtCurrent");
});

tierIncenseOne.addEventListener("click", (e) => {
  incenseTierOne.style.display = "block";
  incense1.classList.add("flashLigtCurrent");
  incenseTierOneOne.style.display = "block";

  incense2.classList.remove("flashLigtCurrent");
  incenseTierTwo.style.display = "none";
  incenseTierTwoTwo.style.display = "none";

  incense3.classList.remove("flashLigtCurrent");
  incenseTierThree.style.display = "none";
  incenseTierThreeThree.style.display = "none";
});

tierIncenseThree.addEventListener("click", (e) => {
  incenseTierThree.style.display = "block";
  incenseTierThreeThree.style.display = "block";
  incense3.classList.add("flashLigtCurrent");

  incenseTierTwo.style.display = "none";
  incenseTierTwoTwo.style.display = "none";
  incense2.classList.remove("flashLigtCurrent");

  incense1.classList.remove("flashLigtCurrent");
  incenseTierOne.style.display = "none";
  incenseTierOneOne.style.display = "none";
});

const tierTripodThree = document.querySelector(".tierTripodThree");
const tierTripodTwo = document.querySelector(".tierTripodTwo");
const tierTripodOne = document.querySelector(".tierTripodOne");

const tripodTierOneOne = document.querySelector(".tripodTierOneOne");
const tripodTierTwoTwo = document.querySelector(".tripodTierTwoTwo");
const tripodTierThreeThree = document.querySelector(".tripodTierThreeThree");

const tripod1 = document.getElementById("tripod1");
const tripod2 = document.getElementById("tripod2");
const tripod3 = document.getElementById("tripod3");

const tripodTierOne = document.querySelector(".tripodTierOne");
const tripodTierTwo = document.querySelector(".tripodTierTwo");
const tripodTierThree = document.querySelector(".tripodTierThree");

tierTripodTwo.addEventListener("click", (e) => {
  tripodTierTwo.style.display = "block";
  tripodTierTwoTwo.style.display = "block";
  tripod2.classList.add("flashLigtCurrent");

  tripodTierThree.style.display = "none";
  tripod3.classList.remove("flashLigtCurrent");
  tripodTierThreeThree.style.display = "none";

  tripodTierOne.style.display = "none";
  tripodTierOneOne.style.display = "none";
  tripod1.classList.remove("flashLigtCurrent");
});

tierTripodOne.addEventListener("click", (e) => {
  tripodTierOne.style.display = "block";
  tripod1.classList.add("flashLigtCurrent");
  tripodTierOneOne.style.display = "block";

  tripod2.classList.remove("flashLigtCurrent");
  tripodTierTwo.style.display = "none";
  tripodTierTwoTwo.style.display = "none";

  tripod3.classList.remove("flashLigtCurrent");
  tripodTierThree.style.display = "none";
  tripodTierThreeThree.style.display = "none";
});

tierTripodThree.addEventListener("click", (e) => {
  tripodTierThree.style.display = "block";
  tripodTierThreeThree.style.display = "block";
  tripod3.classList.add("flashLigtCurrent");

  tripodTierTwo.style.display = "none";
  tripodTierTwoTwo.style.display = "none";
  tripod2.classList.remove("flashLigtCurrent");

  tripod1.classList.remove("flashLigtCurrent");
  tripodTierOne.style.display = "none";
  tripodTierOneOne.style.display = "none";
});

const tierMotionsensorThree = document.querySelector(".tierMotionsensorThree");
const tierMotionsensorTwo = document.querySelector(".tierMotionsensorTwo");
const tierMotionsensorOne = document.querySelector(".tierMotionsensorOne");

const motionsensorTierOneOne = document.querySelector(
  ".motionsensorTierOneOne"
);
const motionsensorTierTwoTwo = document.querySelector(
  ".motionsensorTierTwoTwo"
);
const motionsensorTierThreeThree = document.querySelector(
  ".motionsensorTierThreeThree"
);

const motionsensor1 = document.getElementById("motionsensor1");
const motionsensor2 = document.getElementById("motionsensor2");
const motionsensor3 = document.getElementById("motionsensor3");

const motionsensorTierOne = document.querySelector(".motionsensorTierOne");
const motionsensorTierTwo = document.querySelector(".motionsensorTierTwo");
const motionsensorTierThree = document.querySelector(".motionsensorTierThree");

tierMotionsensorTwo.addEventListener("click", (e) => {
  motionsensorTierTwo.style.display = "block";
  motionsensorTierTwoTwo.style.display = "block";
  motionsensor2.classList.add("flashLigtCurrent");

  motionsensorTierThree.style.display = "none";
  motionsensor3.classList.remove("flashLigtCurrent");
  motionsensorTierThreeThree.style.display = "none";

  motionsensorTierOne.style.display = "none";
  motionsensorTierOneOne.style.display = "none";
  motionsensor1.classList.remove("flashLigtCurrent");
});

tierMotionsensorOne.addEventListener("click", (e) => {
  motionsensorTierOne.style.display = "block";
  motionsensor1.classList.add("flashLigtCurrent");
  motionsensorTierOneOne.style.display = "block";

  motionsensor2.classList.remove("flashLigtCurrent");
  motionsensorTierTwo.style.display = "none";
  motionsensorTierTwoTwo.style.display = "none";

  motionsensor3.classList.remove("flashLigtCurrent");
  motionsensorTierThree.style.display = "none";
  motionsensorTierThreeThree.style.display = "none";
});

tierMotionsensorThree.addEventListener("click", (e) => {
  motionsensorTierThree.style.display = "block";
  motionsensorTierThreeThree.style.display = "block";
  motionsensor3.classList.add("flashLigtCurrent");

  motionsensorTierTwo.style.display = "none";
  motionsensorTierTwoTwo.style.display = "none";
  motionsensor2.classList.remove("flashLigtCurrent");

  motionsensor1.classList.remove("flashLigtCurrent");
  motionsensorTierOne.style.display = "none";
  motionsensorTierOneOne.style.display = "none";
});

const tierSoundsensorThree = document.querySelector(".tierSoundsensorThree");
const tierSoundsensorTwo = document.querySelector(".tierSoundsensorTwo");
const tierSoundsensorOne = document.querySelector(".tierSoundsensorOne");

const soundsensorTierOneOne = document.querySelector(".soundsensorTierOneOne");
const soundsensorTierTwoTwo = document.querySelector(".soundsensorTierTwoTwo");
const soundsensorTierThreeThree = document.querySelector(
  ".soundsensorTierThreeThree"
);

const soundsensor1 = document.getElementById("soundsensor1");
const soundsensor2 = document.getElementById("soundsensor2");
const soundsensor3 = document.getElementById("soundsensor3");

const soundsensorTierOne = document.querySelector(".soundsensorTierOne");
const soundsensorTierTwo = document.querySelector(".soundsensorTierTwo");
const soundsensorTierThree = document.querySelector(".soundsensorTierThree");

tierSoundsensorTwo.addEventListener("click", (e) => {
  soundsensorTierTwo.style.display = "block";
  soundsensorTierTwoTwo.style.display = "block";
  soundsensor2.classList.add("flashLigtCurrent");

  soundsensorTierThree.style.display = "none";
  soundsensor3.classList.remove("flashLigtCurrent");
  soundsensorTierThreeThree.style.display = "none";

  soundsensorTierOne.style.display = "none";
  soundsensorTierOneOne.style.display = "none";
  soundsensor1.classList.remove("flashLigtCurrent");
});

tierSoundsensorOne.addEventListener("click", (e) => {
  soundsensorTierOne.style.display = "block";
  soundsensor1.classList.add("flashLigtCurrent");
  soundsensorTierOneOne.style.display = "block";

  soundsensor2.classList.remove("flashLigtCurrent");
  soundsensorTierTwo.style.display = "none";
  soundsensorTierTwoTwo.style.display = "none";

  soundsensor3.classList.remove("flashLigtCurrent");
  soundsensorTierThree.style.display = "none";
  soundsensorTierThreeThree.style.display = "none";
});

tierSoundsensorThree.addEventListener("click", (e) => {
  soundsensorTierThree.style.display = "block";
  soundsensorTierThreeThree.style.display = "block";
  soundsensor3.classList.add("flashLigtCurrent");

  soundsensorTierTwo.style.display = "none";
  soundsensorTierTwoTwo.style.display = "none";
  soundsensor2.classList.remove("flashLigtCurrent");

  soundsensor1.classList.remove("flashLigtCurrent");
  soundsensorTierOne.style.display = "none";
  soundsensorTierOneOne.style.display = "none";
});

const tierMedicationThree = document.querySelector(".tierMedicationThree");
const tierMedicationTwo = document.querySelector(".tierMedicationTwo");
const tierMedicationOne = document.querySelector(".tierMedicationOne");

const medicationTierOneOne = document.querySelector(".medicationTierOneOne");
const medicationTierTwoTwo = document.querySelector(".medicationTierTwoTwo");
const medicationTierThreeThree = document.querySelector(
  ".medicationTierThreeThree"
);

const medication1 = document.getElementById("medication1");
const medication2 = document.getElementById("medication2");
const medication3 = document.getElementById("medication3");

const medicationTierOne = document.querySelector(".medicationTierOne");
const medicationTierTwo = document.querySelector(".medicationTierTwo");
const medicationTierThree = document.querySelector(".medicationTierThree");

tierMedicationTwo.addEventListener("click", (e) => {
  medicationTierTwo.style.display = "block";
  medicationTierTwoTwo.style.display = "block";
  medication2.classList.add("flashLigtCurrent");

  medicationTierThree.style.display = "none";
  medication3.classList.remove("flashLigtCurrent");
  medicationTierThreeThree.style.display = "none";

  medicationTierOne.style.display = "none";
  medicationTierOneOne.style.display = "none";
  medication1.classList.remove("flashLigtCurrent");
});

tierMedicationOne.addEventListener("click", (e) => {
  medicationTierOne.style.display = "block";
  medication1.classList.add("flashLigtCurrent");
  medicationTierOneOne.style.display = "block";

  medication2.classList.remove("flashLigtCurrent");
  medicationTierTwo.style.display = "none";
  medicationTierTwoTwo.style.display = "none";

  medication3.classList.remove("flashLigtCurrent");
  medicationTierThree.style.display = "none";
  medicationTierThreeThree.style.display = "none";
});

tierMedicationThree.addEventListener("click", (e) => {
  medicationTierThree.style.display = "block";
  medicationTierThreeThree.style.display = "block";
  medication3.classList.add("flashLigtCurrent");

  medicationTierTwo.style.display = "none";
  medicationTierTwoTwo.style.display = "none";
  medication2.classList.remove("flashLigtCurrent");

  medication1.classList.remove("flashLigtCurrent");
  medicationTierOne.style.display = "none";
  medicationTierOneOne.style.display = "none";
});

const tierHeadgearThree = document.querySelector(".tierHeadgearThree");
const tierHeadgearTwo = document.querySelector(".tierHeadgearTwo");
const tierHeadgearOne = document.querySelector(".tierHeadgearOne");

const headgearTierOneOne = document.querySelector(".headgearTierOneOne");
const headgearTierTwoTwo = document.querySelector(".headgearTierTwoTwo");
const headgearTierThreeThree = document.querySelector(
  ".headgearTierThreeThree"
);

const headgear1 = document.getElementById("headgear1");
const headgear2 = document.getElementById("headgear2");
const headgear3 = document.getElementById("headgear3");

const headgearTierOne = document.querySelector(".headgearTierOne");
const headgearTierTwo = document.querySelector(".headgearTierTwo");
const headgearTierThree = document.querySelector(".headgearTierThree");

tierHeadgearTwo.addEventListener("click", (e) => {
  headgearTierTwo.style.display = "block";
  headgearTierTwoTwo.style.display = "block";
  headgear2.classList.add("flashLigtCurrent");

  headgearTierThree.style.display = "none";
  headgear3.classList.remove("flashLigtCurrent");
  headgearTierThreeThree.style.display = "none";

  headgearTierOne.style.display = "none";
  headgearTierOneOne.style.display = "none";
  headgear1.classList.remove("flashLigtCurrent");
});

tierHeadgearOne.addEventListener("click", (e) => {
  headgearTierOne.style.display = "block";
  headgear1.classList.add("flashLigtCurrent");
  headgearTierOneOne.style.display = "block";

  headgear2.classList.remove("flashLigtCurrent");
  headgearTierTwo.style.display = "none";
  headgearTierTwoTwo.style.display = "none";

  headgear3.classList.remove("flashLigtCurrent");
  headgearTierThree.style.display = "none";
  headgearTierThreeThree.style.display = "none";
});

tierHeadgearThree.addEventListener("click", (e) => {
  headgearTierThree.style.display = "block";
  headgearTierThreeThree.style.display = "block";
  headgear3.classList.add("flashLigtCurrent");

  headgearTierTwo.style.display = "none";
  headgearTierTwoTwo.style.display = "none";
  headgear2.classList.remove("flashLigtCurrent");

  headgear1.classList.remove("flashLigtCurrent");
  headgearTierOne.style.display = "none";
  headgearTierOneOne.style.display = "none";
});

const tierCameraThree = document.querySelector(".tierCameraThree");
const tierCameraTwo = document.querySelector(".tierCameraTwo");
const tierCameraOne = document.querySelector(".tierCameraOne");

const cameraTierOneOne = document.querySelector(".cameraTierOneOne");
const cameraTierTwoTwo = document.querySelector(".cameraTierTwoTwo");
const cameraTierThreeThree = document.querySelector(".cameraTierThreeThree");

const camera1 = document.getElementById("camera1");
const camera2 = document.getElementById("camera2");
const camera3 = document.getElementById("camera3");

const cameraTierOne = document.querySelector(".cameraTierOne");
const cameraTierTwo = document.querySelector(".cameraTierTwo");
const cameraTierThree = document.querySelector(".cameraTierThree");

tierCameraTwo.addEventListener("click", (e) => {
  cameraTierTwo.style.display = "block";
  cameraTierTwoTwo.style.display = "block";
  camera2.classList.add("flashLigtCurrent");

  cameraTierThree.style.display = "none";
  camera3.classList.remove("flashLigtCurrent");
  cameraTierThreeThree.style.display = "none";

  cameraTierOne.style.display = "none";
  cameraTierOneOne.style.display = "none";
  camera1.classList.remove("flashLigtCurrent");
});

tierCameraOne.addEventListener("click", (e) => {
  cameraTierOne.style.display = "block";
  camera1.classList.add("flashLigtCurrent");
  cameraTierOneOne.style.display = "block";

  camera2.classList.remove("flashLigtCurrent");
  cameraTierTwo.style.display = "none";
  cameraTierTwoTwo.style.display = "none";

  camera3.classList.remove("flashLigtCurrent");
  cameraTierThree.style.display = "none";
  cameraTierThreeThree.style.display = "none";
});

tierCameraThree.addEventListener("click", (e) => {
  cameraTierThree.style.display = "block";
  cameraTierThreeThree.style.display = "block";
  camera3.classList.add("flashLigtCurrent");

  cameraTierTwo.style.display = "none";
  cameraTierTwoTwo.style.display = "none";
  camera2.classList.remove("flashLigtCurrent");

  camera1.classList.remove("flashLigtCurrent");
  cameraTierOne.style.display = "none";
  cameraTierOneOne.style.display = "none";
});

const tierSaltThree = document.querySelector(".tierSaltThree");
const tierSaltTwo = document.querySelector(".tierSaltTwo");
const tierSaltOne = document.querySelector(".tierSaltOne");

const saltTierOneOne = document.querySelector(".saltTierOneOne");
const saltTierTwoTwo = document.querySelector(".saltTierTwoTwo");
const saltTierThreeThree = document.querySelector(".saltTierThreeThree");

const salt1 = document.getElementById("salt1");
const salt2 = document.getElementById("salt2");
const salt3 = document.getElementById("salt3");

const saltTierOne = document.querySelector(".saltTierOne");
const saltTierTwo = document.querySelector(".saltTierTwo");
const saltTierThree = document.querySelector(".saltTierThree");

tierSaltTwo.addEventListener("click", (e) => {
  saltTierTwo.style.display = "block";
  saltTierTwoTwo.style.display = "block";
  salt2.classList.add("flashLigtCurrent");

  saltTierThree.style.display = "none";
  salt3.classList.remove("flashLigtCurrent");
  saltTierThreeThree.style.display = "none";

  saltTierOne.style.display = "none";
  saltTierOneOne.style.display = "none";
  salt1.classList.remove("flashLigtCurrent");
});

tierSaltOne.addEventListener("click", (e) => {
  saltTierOne.style.display = "block";
  salt1.classList.add("flashLigtCurrent");
  saltTierOneOne.style.display = "block";

  salt2.classList.remove("flashLigtCurrent");
  saltTierTwo.style.display = "none";
  saltTierTwoTwo.style.display = "none";

  salt3.classList.remove("flashLigtCurrent");
  saltTierThree.style.display = "none";
  saltTierThreeThree.style.display = "none";
});

tierSaltThree.addEventListener("click", (e) => {
  saltTierThree.style.display = "block";
  saltTierThreeThree.style.display = "block";
  salt3.classList.add("flashLigtCurrent");

  saltTierTwo.style.display = "none";
  saltTierTwoTwo.style.display = "none";
  salt2.classList.remove("flashLigtCurrent");

  salt1.classList.remove("flashLigtCurrent");
  saltTierOne.style.display = "none";
  saltTierOneOne.style.display = "none";
});

const tierDotsThree = document.querySelector(".tierDotsThree");
const tierDotsTwo = document.querySelector(".tierDotsTwo");
const tierDotsOne = document.querySelector(".tierDotsOne");

const dotsTierOneOne = document.querySelector(".dotsTierOneOne");
const dotsTierTwoTwo = document.querySelector(".dotsTierTwoTwo");
const dotsTierThreeThree = document.querySelector(".dotsTierThreeThree");

const dots1 = document.getElementById("dots1");
const dots2 = document.getElementById("dots2");
const dots3 = document.getElementById("dots3");

const dotsTierOne = document.querySelector(".dotsTierOne");
const dotsTierTwo = document.querySelector(".dotsTierTwo");
const dotsTierThree = document.querySelector(".dotsTierThree");

tierDotsTwo.addEventListener("click", (e) => {
  dotsTierTwo.style.display = "block";
  dotsTierTwoTwo.style.display = "block";
  dots2.classList.add("flashLigtCurrent");

  dotsTierThree.style.display = "none";
  dots3.classList.remove("flashLigtCurrent");
  dotsTierThreeThree.style.display = "none";

  dotsTierOne.style.display = "none";
  dotsTierOneOne.style.display = "none";
  dots1.classList.remove("flashLigtCurrent");
});

tierDotsOne.addEventListener("click", (e) => {
  dotsTierOne.style.display = "block";
  dots1.classList.add("flashLigtCurrent");
  dotsTierOneOne.style.display = "block";

  dots2.classList.remove("flashLigtCurrent");
  dotsTierTwo.style.display = "none";
  dotsTierTwoTwo.style.display = "none";

  dots3.classList.remove("flashLigtCurrent");
  dotsTierThree.style.display = "none";
  dotsTierThreeThree.style.display = "none";
});

tierDotsThree.addEventListener("click", (e) => {
  dotsTierThree.style.display = "block";
  dotsTierThreeThree.style.display = "block";
  dots3.classList.add("flashLigtCurrent");

  dotsTierTwo.style.display = "none";
  dotsTierTwoTwo.style.display = "none";
  dots2.classList.remove("flashLigtCurrent");

  dots1.classList.remove("flashLigtCurrent");
  dotsTierOne.style.display = "none";
  dotsTierOneOne.style.display = "none";
});

const tierEmfThree = document.querySelector(".tierEmfThree");
const tierEmfTwo = document.querySelector(".tierEmfTwo");
const tierEmfOne = document.querySelector(".tierEmfOne");

const emfTierOneOne = document.querySelector(".emfTierOneOne");
const emfTierTwoTwo = document.querySelector(".emfTierTwoTwo");
const emfTierThreeThree = document.querySelector(".emfTierThreeThree");

const emf1 = document.getElementById("emf1");
const emf2 = document.getElementById("emf2");
const emf3 = document.getElementById("emf3");

const emfTierOne = document.querySelector(".emfTierOne");
const emfTierTwo = document.querySelector(".emfTierTwo");
const emfTierThree = document.querySelector(".emfTierThree");

tierEmfTwo.addEventListener("click", (e) => {
  emfTierTwo.style.display = "block";
  emfTierTwoTwo.style.display = "block";
  emf2.classList.add("flashLigtCurrent");

  emfTierThree.style.display = "none";
  emf3.classList.remove("flashLigtCurrent");
  emfTierThreeThree.style.display = "none";

  emfTierOne.style.display = "none";
  emfTierOneOne.style.display = "none";
  emf1.classList.remove("flashLigtCurrent");
});

tierEmfOne.addEventListener("click", (e) => {
  emfTierOne.style.display = "block";
  emf1.classList.add("flashLigtCurrent");
  emfTierOneOne.style.display = "block";

  emf2.classList.remove("flashLigtCurrent");
  emfTierTwo.style.display = "none";
  emfTierTwoTwo.style.display = "none";

  emf3.classList.remove("flashLigtCurrent");
  emfTierThree.style.display = "none";
  emfTierThreeThree.style.display = "none";
});

tierEmfThree.addEventListener("click", (e) => {
  emfTierThree.style.display = "block";
  emfTierThreeThree.style.display = "block";
  emf3.classList.add("flashLigtCurrent");

  emfTierTwo.style.display = "none";
  emfTierTwoTwo.style.display = "none";
  emf2.classList.remove("flashLigtCurrent");

  emf1.classList.remove("flashLigtCurrent");
  emfTierOne.style.display = "none";
  emfTierOneOne.style.display = "none";
});

const tierUvThree = document.querySelector(".tierUvThree");
const tierUvTwo = document.querySelector(".tierUvTwo");
const tierUvOne = document.querySelector(".tierUvOne");

const uvTierOneOne = document.querySelector(".uvTierOneOne");
const uvTierTwoTwo = document.querySelector(".uvTierTwoTwo");
const uvTierThreeThree = document.querySelector(".uvTierThreeThree");

const uv1 = document.getElementById("uv1");
const uv2 = document.getElementById("uv2");
const uv3 = document.getElementById("uv3");

const uvTierOne = document.querySelector(".uvTierOne");
const uvTierTwo = document.querySelector(".uvTierTwo");
const uvTierThree = document.querySelector(".uvTierThree");

tierUvTwo.addEventListener("click", (e) => {
  uvTierTwo.style.display = "block";
  uvTierTwoTwo.style.display = "block";
  uv2.classList.add("flashLigtCurrent");

  uvTierThree.style.display = "none";
  uv3.classList.remove("flashLigtCurrent");
  uvTierThreeThree.style.display = "none";

  uvTierOne.style.display = "none";
  uvTierOneOne.style.display = "none";
  uv1.classList.remove("flashLigtCurrent");
});

tierUvOne.addEventListener("click", (e) => {
  uvTierOne.style.display = "block";
  uv1.classList.add("flashLigtCurrent");
  uvTierOneOne.style.display = "block";

  uv2.classList.remove("flashLigtCurrent");
  uvTierTwo.style.display = "none";
  uvTierTwoTwo.style.display = "none";

  uv3.classList.remove("flashLigtCurrent");
  uvTierThree.style.display = "none";
  uvTierThreeThree.style.display = "none";
});

tierUvThree.addEventListener("click", (e) => {
  uvTierThree.style.display = "block";
  uvTierThreeThree.style.display = "block";
  uv3.classList.add("flashLigtCurrent");

  uvTierTwo.style.display = "none";
  uvTierTwoTwo.style.display = "none";
  uv2.classList.remove("flashLigtCurrent");

  uv1.classList.remove("flashLigtCurrent");
  uvTierOne.style.display = "none";
  uvTierOneOne.style.display = "none";
});

const tierCrucifixThree = document.querySelector(".tierCrucifixThree");
const tierCrucifixTwo = document.querySelector(".tierCrucifixTwo");
const tierCrucifixOne = document.querySelector(".tierCrucifixOne");

const crucifixTierOneOne = document.querySelector(".crucifixTierOneOne");
const crucifixTierTwoTwo = document.querySelector(".crucifixTierTwoTwo");
const crucifixTierThreeThree = document.querySelector(
  ".crucifixTierThreeThree"
);

const crucifix1 = document.getElementById("crucifix1");
const crucifix2 = document.getElementById("crucifix2");
const crucifix3 = document.getElementById("crucifix3");

const crucifixTierOne = document.querySelector(".crucifixTierOne");
const crucifixTierTwo = document.querySelector(".crucifixTierTwo");
const crucifixTierThree = document.querySelector(".crucifixTierThree");

tierCrucifixTwo.addEventListener("click", (e) => {
  crucifixTierTwo.style.display = "block";
  crucifixTierTwoTwo.style.display = "block";
  crucifix2.classList.add("flashLigtCurrent");

  crucifixTierThree.style.display = "none";
  crucifix3.classList.remove("flashLigtCurrent");
  crucifixTierThreeThree.style.display = "none";

  crucifixTierOne.style.display = "none";
  crucifixTierOneOne.style.display = "none";
  crucifix1.classList.remove("flashLigtCurrent");
});

tierCrucifixOne.addEventListener("click", (e) => {
  crucifixTierOne.style.display = "block";
  crucifix1.classList.add("flashLigtCurrent");
  crucifixTierOneOne.style.display = "block";

  crucifix2.classList.remove("flashLigtCurrent");
  crucifixTierTwo.style.display = "none";
  crucifixTierTwoTwo.style.display = "none";

  crucifix3.classList.remove("flashLigtCurrent");
  crucifixTierThree.style.display = "none";
  crucifixTierThreeThree.style.display = "none";
});

tierCrucifixThree.addEventListener("click", (e) => {
  crucifixTierThree.style.display = "block";
  crucifixTierThreeThree.style.display = "block";
  crucifix3.classList.add("flashLigtCurrent");

  crucifixTierTwo.style.display = "none";
  crucifixTierTwoTwo.style.display = "none";
  crucifix2.classList.remove("flashLigtCurrent");

  crucifix1.classList.remove("flashLigtCurrent");
  crucifixTierOne.style.display = "none";
  crucifixTierOneOne.style.display = "none";
});

const tierSpiritboxThree = document.querySelector(".tierSpiritboxThree");
const tierSpiritboxTwo = document.querySelector(".tierSpiritboxTwo");
const tierSpiritboxOne = document.querySelector(".tierSpiritboxOne");

const spiritboxTierOneOne = document.querySelector(".spiritboxTierOneOne");
const spiritboxTierTwoTwo = document.querySelector(".spiritboxTierTwoTwo");
const spiritboxTierThreeThree = document.querySelector(
  ".spiritboxTierThreeThree"
);

const spiritbox1 = document.getElementById("spiritbox1");
const spiritbox2 = document.getElementById("spiritbox2");
const spiritbox3 = document.getElementById("spiritbox3");

const spiritboxTierOne = document.querySelector(".spiritboxTierOne");
const spiritboxTierTwo = document.querySelector(".spiritboxTierTwo");
const spiritboxTierThree = document.querySelector(".spiritboxTierThree");

tierSpiritboxTwo.addEventListener("click", (e) => {
  spiritboxTierTwo.style.display = "block";
  spiritboxTierTwoTwo.style.display = "block";
  spiritbox2.classList.add("flashLigtCurrent");

  spiritboxTierThree.style.display = "none";
  spiritbox3.classList.remove("flashLigtCurrent");
  spiritboxTierThreeThree.style.display = "none";

  spiritboxTierOne.style.display = "none";
  spiritboxTierOneOne.style.display = "none";
  spiritbox1.classList.remove("flashLigtCurrent");
});

tierSpiritboxOne.addEventListener("click", (e) => {
  spiritboxTierOne.style.display = "block";
  spiritbox1.classList.add("flashLigtCurrent");
  spiritboxTierOneOne.style.display = "block";

  spiritbox2.classList.remove("flashLigtCurrent");
  spiritboxTierTwo.style.display = "none";
  spiritboxTierTwoTwo.style.display = "none";

  spiritbox3.classList.remove("flashLigtCurrent");
  spiritboxTierThree.style.display = "none";
  spiritboxTierThreeThree.style.display = "none";
});

tierSpiritboxThree.addEventListener("click", (e) => {
  spiritboxTierThree.style.display = "block";
  spiritboxTierThreeThree.style.display = "block";
  spiritbox3.classList.add("flashLigtCurrent");

  spiritboxTierTwo.style.display = "none";
  spiritboxTierTwoTwo.style.display = "none";
  spiritbox2.classList.remove("flashLigtCurrent");

  spiritbox1.classList.remove("flashLigtCurrent");
  spiritboxTierOne.style.display = "none";
  spiritboxTierOneOne.style.display = "none";
});

const tierThermometerThree = document.querySelector(".tierThermometerThree");
const tierThermometerTwo = document.querySelector(".tierThermometerTwo");
const tierThermometerOne = document.querySelector(".tierThermometerOne");

const thermometerTierOneOne = document.querySelector(".thermometerTierOneOne");
const thermometerTierTwoTwo = document.querySelector(".thermometerTierTwoTwo");
const thermometerTierThreeThree = document.querySelector(
  ".thermometerTierThreeThree"
);

const thermometer1 = document.getElementById("thermometer1");
const thermometer2 = document.getElementById("thermometer2");
const thermometer3 = document.getElementById("thermometer3");

const thermometerTierOne = document.querySelector(".thermometerTierOne");
const thermometerTierTwo = document.querySelector(".thermometerTierTwo");
const thermometerTierThree = document.querySelector(".thermometerTierThree");

tierThermometerTwo.addEventListener("click", (e) => {
  thermometerTierTwo.style.display = "block";
  thermometerTierTwoTwo.style.display = "block";
  thermometer2.classList.add("flashLigtCurrent");

  thermometerTierThree.style.display = "none";
  thermometer3.classList.remove("flashLigtCurrent");
  thermometerTierThreeThree.style.display = "none";

  thermometerTierOne.style.display = "none";
  thermometerTierOneOne.style.display = "none";
  thermometer1.classList.remove("flashLigtCurrent");
});

tierThermometerOne.addEventListener("click", (e) => {
  thermometerTierOne.style.display = "block";
  thermometer1.classList.add("flashLigtCurrent");
  thermometerTierOneOne.style.display = "block";

  thermometer2.classList.remove("flashLigtCurrent");
  thermometerTierTwo.style.display = "none";
  thermometerTierTwoTwo.style.display = "none";

  thermometer3.classList.remove("flashLigtCurrent");
  thermometerTierThree.style.display = "none";
  thermometerTierThreeThree.style.display = "none";
});

tierThermometerThree.addEventListener("click", (e) => {
  thermometerTierThree.style.display = "block";
  thermometerTierThreeThree.style.display = "block";
  thermometer3.classList.add("flashLigtCurrent");

  thermometerTierTwo.style.display = "none";
  thermometerTierTwoTwo.style.display = "none";
  thermometer2.classList.remove("flashLigtCurrent");

  thermometer1.classList.remove("flashLigtCurrent");
  thermometerTierOne.style.display = "none";
  thermometerTierOneOne.style.display = "none";
});

const tierWritingbookThree = document.querySelector(".tierWritingbookThree");
const tierWritingbookTwo = document.querySelector(".tierWritingbookTwo");
const tierWritingbookOne = document.querySelector(".tierWritingbookOne");

const writingbookTierOneOne = document.querySelector(".writingbookTierOneOne");
const writingbookTierTwoTwo = document.querySelector(".writingbookTierTwoTwo");
const writingbookTierThreeThree = document.querySelector(
  ".writingbookTierThreeThree"
);

const writingbook1 = document.getElementById("writingbook1");
const writingbook2 = document.getElementById("writingbook2");
const writingbook3 = document.getElementById("writingbook3");

const writingbookTierOne = document.querySelector(".writingbookTierOne");
const writingbookTierTwo = document.querySelector(".writingbookTierTwo");
const writingbookTierThree = document.querySelector(".writingbookTierThree");

tierWritingbookTwo.addEventListener("click", (e) => {
  writingbookTierTwo.style.display = "block";
  writingbookTierTwoTwo.style.display = "block";
  writingbook2.classList.add("flashLigtCurrent");

  writingbookTierThree.style.display = "none";
  writingbook3.classList.remove("flashLigtCurrent");
  writingbookTierThreeThree.style.display = "none";

  writingbookTierOne.style.display = "none";
  writingbookTierOneOne.style.display = "none";
  writingbook1.classList.remove("flashLigtCurrent");
});

tierWritingbookOne.addEventListener("click", (e) => {
  writingbookTierOne.style.display = "block";
  writingbook1.classList.add("flashLigtCurrent");
  writingbookTierOneOne.style.display = "block";

  writingbook2.classList.remove("flashLigtCurrent");
  writingbookTierTwo.style.display = "none";
  writingbookTierTwoTwo.style.display = "none";

  writingbook3.classList.remove("flashLigtCurrent");
  writingbookTierThree.style.display = "none";
  writingbookTierThreeThree.style.display = "none";
});

tierWritingbookThree.addEventListener("click", (e) => {
  writingbookTierThree.style.display = "block";
  writingbookTierThreeThree.style.display = "block";
  writingbook3.classList.add("flashLigtCurrent");

  writingbookTierTwo.style.display = "none";
  writingbookTierTwoTwo.style.display = "none";
  writingbook2.classList.remove("flashLigtCurrent");

  writingbook1.classList.remove("flashLigtCurrent");
  writingbookTierOne.style.display = "none";
  writingbookTierOneOne.style.display = "none";
});

const tierMicrophoneThree = document.querySelector(".tierMicrophoneThree");
const tierMicrophoneTwo = document.querySelector(".tierMicrophoneTwo");
const tierMicrophoneOne = document.querySelector(".tierMicrophoneOne");

const microphoneTierOneOne = document.querySelector(".microphoneTierOneOne");
const microphoneTierTwoTwo = document.querySelector(".microphoneTierTwoTwo");
const microphoneTierThreeThree = document.querySelector(
  ".microphoneTierThreeThree"
);

const microphone1 = document.getElementById("microphone1");
const microphone2 = document.getElementById("microphone2");
const microphone3 = document.getElementById("microphone3");

const microphoneTierOne = document.querySelector(".microphoneTierOne");
const microphoneTierTwo = document.querySelector(".microphoneTierTwo");
const microphoneTierThree = document.querySelector(".microphoneTierThree");

tierMicrophoneTwo.addEventListener("click", (e) => {
  microphoneTierTwo.style.display = "block";
  microphoneTierTwoTwo.style.display = "block";
  microphone2.classList.add("flashLigtCurrent");

  microphoneTierThree.style.display = "none";
  microphone3.classList.remove("flashLigtCurrent");
  microphoneTierThreeThree.style.display = "none";

  microphoneTierOne.style.display = "none";
  microphoneTierOneOne.style.display = "none";
  microphone1.classList.remove("flashLigtCurrent");
});

tierMicrophoneOne.addEventListener("click", (e) => {
  microphoneTierOne.style.display = "block";
  microphone1.classList.add("flashLigtCurrent");
  microphoneTierOneOne.style.display = "block";

  microphone2.classList.remove("flashLigtCurrent");
  microphoneTierTwo.style.display = "none";
  microphoneTierTwoTwo.style.display = "none";

  microphone3.classList.remove("flashLigtCurrent");
  microphoneTierThree.style.display = "none";
  microphoneTierThreeThree.style.display = "none";
});

tierMicrophoneThree.addEventListener("click", (e) => {
  microphoneTierThree.style.display = "block";
  microphoneTierThreeThree.style.display = "block";
  microphone3.classList.add("flashLigtCurrent");

  microphoneTierTwo.style.display = "none";
  microphoneTierTwoTwo.style.display = "none";
  microphone2.classList.remove("flashLigtCurrent");

  microphone1.classList.remove("flashLigtCurrent");
  microphoneTierOne.style.display = "none";
  microphoneTierOneOne.style.display = "none";
});
// Modal Object Maudits \\

// Modal Singe
const modalSinge = document.getElementById("myModalSinge");
const imgSinge = document.getElementById("modalSinge");
imgSinge.onclick = function () {
  modalSinge.style.display = "block";
};
const spanSinge = document.getElementsByClassName("closeSinge")[0];
spanSinge.onclick = function () {
  modalSinge.style.display = "none";
};

// Modal Music
const modalMusic = document.getElementById("myModalMusic");
const imgMusic = document.getElementById("modalMusic");
imgMusic.onclick = function () {
  modalMusic.style.display = "block";
};
const spanMusic = document.getElementsByClassName("closeMusic")[0];
spanMusic.onclick = function () {
  modalMusic.style.display = "none";
};

// Modal Miroir
const modalMiroir = document.getElementById("myModalMiroir");
const imgMiroir = document.getElementById("modalMiroir");
imgMiroir.onclick = function () {
  modalMiroir.style.display = "block";
};
const spanMiroir = document.getElementsByClassName("closeMiroir")[0];
spanMiroir.onclick = function () {
  modalMiroir.style.display = "none";
};

// Modal Ouija
const modalOuija = document.getElementById("myModalOuija");
const imgOuija = document.getElementById("modalOuija");
imgOuija.onclick = function () {
  modalOuija.style.display = "block";
};
const spanOuija = document.getElementsByClassName("closeOuija")[0];
spanOuija.onclick = function () {
  modalOuija.style.display = "none";
};

// Modal Circle
const modalCircle = document.getElementById("myModalCircle");
const imgCircle = document.getElementById("modalCircle");
imgCircle.onclick = function () {
  modalCircle.style.display = "block";
};
const spanCircle = document.getElementsByClassName("closeCircle")[0];
spanCircle.onclick = function () {
  modalCircle.style.display = "none";
};

// Modal Tarot
const modalTarot = document.getElementById("myModalTarot");
const imgTarot = document.getElementById("modalTarot");
imgTarot.onclick = function () {
  modalTarot.style.display = "block";
};
const spanTarot = document.getElementsByClassName("closeTarot")[0];
spanTarot.onclick = function () {
  modalTarot.style.display = "none";
};

// Modal Voodoo
const modalVoodoo = document.getElementById("myModalVoodoo");
const imgVoodoo = document.getElementById("modalVoodoo");
imgVoodoo.onclick = function () {
  modalVoodoo.style.display = "block";
};
const spanVoodoo = document.getElementsByClassName("closeVoodoo")[0];
spanVoodoo.onclick = function () {
  modalVoodoo.style.display = "none";
};

// Modal Os
const modalOs = document.getElementById("myModalOs");
const imgOs = document.getElementById("modalOs");
imgOs.onclick = function () {
  modalOs.style.display = "block";
};
const spanOs = document.getElementsByClassName("closeOs")[0];
spanOs.onclick = function () {
  modalOs.style.display = "none";
};

// Modal Carte du lieu
const modalLieu = document.getElementById("myModalLieu");
const imgLieu = document.getElementById("modalLieu");
imgLieu.onclick = function () {
  modalLieu.style.display = "block";
};
const spanLieu = document.getElementsByClassName("closeLieu")[0];
spanLieu.onclick = function () {
  modalLieu.style.display = "none";
};

// Modal Active
const modalActive = document.getElementById("myModalActive");
const imgActive = document.getElementById("modalActive");
imgActive.onclick = function () {
  modalActive.style.display = "block";
};
const spanActive = document.getElementsByClassName("closeActive")[0];
spanActive.onclick = function () {
  modalActive.style.display = "none";
};

// Modal Mental
const modalMental = document.getElementById("myModalMental");
const imgMental = document.getElementById("modalMental");
imgMental.onclick = function () {
  modalMental.style.display = "block";
};
const spanMental = document.getElementsByClassName("closeMental")[0];
spanMental.onclick = function () {
  modalMental.style.display = "none";
};

// Modal CapSono
const modalCapSono = document.getElementById("myModalCapSono");
const imgCapSono = document.getElementById("modalCapSono");
imgCapSono.onclick = function () {
  modalCapSono.style.display = "block";
};
const spanCapSono = document.getElementsByClassName("closeCapSono")[0];
spanCapSono.onclick = function () {
  modalCapSono.style.display = "none";
};

// Modal Computer
const modalComputer = document.getElementById("myModalComputer");
const imgComputer = document.getElementById("modalComputer");
imgComputer.onclick = function () {
  modalComputer.style.display = "block";
};
const spanComputer = document.getElementsByClassName("closeComputer")[0];
spanComputer.onclick = function () {
  modalComputer.style.display = "none";
};

// Modal Objectifs
const modalObjectifs = document.getElementById("myModalObjectifs");
const imgObjectifs = document.getElementById("modalObjectifs");
imgObjectifs.onclick = function () {
  modalObjectifs.style.display = "block";
};
const spanObjectifs = document.getElementsByClassName("closeObjectifs")[0];
spanObjectifs.onclick = function () {
  modalObjectifs.style.display = "none";
};

// Modal CARTE \\

const modalTanglewood = document.getElementById("myModalTanglewood");
const imgTanglewood = document.getElementById("modalTanglewood");
imgTanglewood.onclick = function () {
  modalTanglewood.style.display = "block";
};
const spanTanglewood = document.getElementsByClassName("closeTanglewood")[0];
spanTanglewood.onclick = function () {
  modalTanglewood.style.display = "none";
};

const modalRidgeview = document.getElementById("myModalRidgeview");
const imgRidgeview = document.getElementById("modalRidgeview");
imgRidgeview.onclick = function () {
  modalRidgeview.style.display = "block";
};
const spanRidgeview = document.getElementsByClassName("closeRidgeview")[0];
spanRidgeview.onclick = function () {
  modalRidgeview.style.display = "none";
};

const modalWillow = document.getElementById("myModalWillow");
const imgWillow = document.getElementById("modalWillow");
imgWillow.onclick = function () {
  modalWillow.style.display = "block";
};
const spanWillow = document.getElementsByClassName("closeWillow")[0];
spanWillow.onclick = function () {
  modalWillow.style.display = "none";
};

const modalEdgefield = document.getElementById("myModalEdgefield");
const imgEdgefield = document.getElementById("modalEdgefield");
imgEdgefield.onclick = function () {
  modalEdgefield.style.display = "block";
};
const spanEdgefield = document.getElementsByClassName("closeEdgefield")[0];
spanEdgefield.onclick = function () {
  modalEdgefield.style.display = "none";
};

const modalBleasdale = document.getElementById("myModalBleasdale");
const imgBleasdale = document.getElementById("modalBleasdale");
imgBleasdale.onclick = function () {
  modalBleasdale.style.display = "block";
};
const spanBleasdale = document.getElementsByClassName("closeBleasdale")[0];
spanBleasdale.onclick = function () {
  modalBleasdale.style.display = "none";
};

const modalCamp = document.getElementById("myModalCamp");
const imgCamp = document.getElementById("modalCamp");
imgCamp.onclick = function () {
  modalCamp.style.display = "block";
};
const spanCamp = document.getElementsByClassName("closeCamp")[0];
spanCamp.onclick = function () {
  modalCamp.style.display = "none";
};

const modalGrafton = document.getElementById("myModalGrafton");
const imgGrafton = document.getElementById("modalGrafton");
imgGrafton.onclick = function () {
  modalGrafton.style.display = "block";
};
const spanGrafton = document.getElementsByClassName("closeGrafton")[0];
spanGrafton.onclick = function () {
  modalGrafton.style.display = "none";
};

const modalMaple = document.getElementById("myModalMaple");
const imgMaple = document.getElementById("modalMaple");
imgMaple.onclick = function () {
  modalMaple.style.display = "block";
};
const spanMaple = document.getElementsByClassName("closeMaple")[0];
spanMaple.onclick = function () {
  modalMaple.style.display = "none";
};

const modalPrison = document.getElementById("myModalPrison");
const imgPrison = document.getElementById("modalPrison");
imgPrison.onclick = function () {
  modalPrison.style.display = "block";
};
const spanPrison = document.getElementsByClassName("closePrison")[0];
spanPrison.onclick = function () {
  modalPrison.style.display = "none";
};

const modalBrownstone = document.getElementById("myModalBrownstone");
const imgBrownstone = document.getElementById("modalBrownstone");
imgBrownstone.onclick = function () {
  modalBrownstone.style.display = "block";
};
const spanBrownstone = document.getElementsByClassName("closeBrownstone")[0];
spanBrownstone.onclick = function () {
  modalBrownstone.style.display = "none";
};

const modalSunny = document.getElementById("myModalSunny");
const imgSunny = document.getElementById("modalSunny");
imgSunny.onclick = function () {
  modalSunny.style.display = "block";
};
const spanSunny = document.getElementsByClassName("closeSunny")[0];
spanSunny.onclick = function () {
  modalSunny.style.display = "none";
};
