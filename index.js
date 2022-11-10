let numberHome = 0;
let numberGuest = 0;
let resultOnScreen = document.getElementById("resultHome");
let resultOnScreenGuest = document.getElementById("resultGuest");

function addPlusOne() {
  numberHome += 1;
  resultOnScreen.textContent = numberHome;
}
function addPlusTwo() {
  numberHome += 2;
  resultOnScreen.textContent = numberHome;
}
function addPlusThree() {
  numberHome += 3;
  resultOnScreen.textContent = numberHome;
}
function addPlusOneG() {
  numberGuest += 1;
  resultOnScreenGuest.textContent = numberGuest;
}
function addPlusTwoG() {
  numberGuest += 2;
  resultOnScreenGuest.textContent = numberGuest;
}
function addPlusThreeG() {
  numberGuest += 3;
  resultOnScreenGuest.textContent = numberGuest;
}
function newGame() {
  numberHome = 0;
  resultOnScreen.textContent = numberHome;
  numberGuest = 0;
  resultOnScreenGuest.textContent = numberGuest;
}
