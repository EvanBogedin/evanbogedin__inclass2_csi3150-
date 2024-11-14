const aButton = document.getElementById("a-button");
const bButton = document.getElementById("b-button");
const cButton = document.getElementById("c-button");
const hideContainerA = document.getElementById("hide-container-a");
const hideContainerB = document.getElementById("hide-container-b");
const hideContainerC = document.getElementById("hide-container-c");

function showA() {
  hideContainerA.hidden = false;
}

function hideA() {
  hideContainerA.hidden = true;
}

function showB() {
  hideContainerB.hidden = false;
}

function hideB() {
  hideContainerB.hidden = true;
}

function showC() {
  hideContainerC.hidden = false;
}

function hideC() {
  hideContainerC.hidden = true;
}