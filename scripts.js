document.querySelector("main div p").addEventListener("click", changeColor);

document.querySelector("main div:nth-child(2)").addEventListener("click",showObjectOnConsole);

document.querySelector("input").addEventListener("keypress",showObjectOnConsole);

document.querySelector("main div:nth-child(6) p").addEventListener("click", deactivateEventListener);

document.querySelector("main div:nth-child(3)").addEventListener("mousemove", randomizer1);

document.querySelector("main div:nth-child(6)").addEventListener("mousemove", randomizer2);




function changeColor (event) {
    document.querySelector("main div").classList.toggle("red");
}

function showObjectOnConsole (event) {
    console.log(event);
}

function deactivateEventListener () {
    alert("eventListener removido");
    document.querySelector("main div:nth-child(6)").removeEventListener("mousemove", randomizer2);
    document.querySelector("main div:nth-child(6) p").removeEventListener("click", deactivateEventListener);
}

function randomizer1() {
    document.querySelector("main div:nth-child(3) p:nth-child(2)").innerHTML = Math.random();
}

function randomizer2() {
    document.querySelector("main div:nth-child(6) p:nth-child(2)").innerHTML = Math.random();
}

//BUBBLING SECTION

activateBubbling();
document.querySelector("button").addEventListener("click", activateCapture);

function activateBubbling () {
    document.querySelector("main div:nth-child(4) p").addEventListener("click", eventOne);
    document.querySelector("main div:nth-child(4)").addEventListener("click", eventTwo);
}

function activateCapture () {
    document.querySelector("main div:nth-child(4) p").removeEventListener("click", eventOne);
    document.querySelector("main div:nth-child(4)").removeEventListener("click", eventTwo);
    document.querySelector("main div:nth-child(4) p").addEventListener("click", eventOne);
    document.querySelector("main div:nth-child(4)").addEventListener("click", eventTwo, true);
    document.querySelector("button").removeEventListener("click", activateCapture);
    alert("botao desativado");
}

function eventOne () {
    alert("evento do P");
}

function eventTwo () {
    alert("evento da DIV");
}


// STOP PROPAGATIONS SECTION

document.querySelector("main div:nth-child(5) p").addEventListener("click", stopProp);
document.querySelector("main div:nth-child(5)").addEventListener("click", eventTwo);

function stopProp (event) {
    alert("evento do P");
    event.stopPropagation();
}


