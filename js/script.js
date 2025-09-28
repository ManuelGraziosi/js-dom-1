const lampImgHandler = document.getElementById("lamp-img");
const lampBtnHandler = document.getElementById("lamp-btn");
const mainHandler = document.querySelector("#main");

let isLightOn = false;

// console.log("lampImgHandler", lampImgHandler.outerHTML);
// console.log("lampBtnHandler", lampBtnHandler);
console.log("mainHandler", mainHandler.classList);

const turnOnLamp = function () {

    lampImgHandler.src = "../img/yellow_lamp.png";
    lampBtnHandler.innerHTML = `Ora clicca per spegnere`;
    mainHandler.classList.add("ligth-on");

}

const turnOffLamp = function () {
    lampImgHandler.src = "../img/white_lamp.png";
    lampBtnHandler.innerHTML = `Clicca per accendere`;
    mainHandler.classList.remove("ligth-on");
}

lampBtnHandler.addEventListener("click", function () {

    if (isLightOn) {
        turnOffLamp();

    } else {
        turnOnLamp();

    }
    isLightOn = !isLightOn;
    console.log("isLightOn", isLightOn);
})