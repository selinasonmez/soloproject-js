let scoreboard1 = 12;
let scoreboard2 = 5;
document.getElementById("scoreboard1-el").textContent = scoreboard1;
document.getElementById("scoreboard2-el").textContent = scoreboard2;

function plusOne() {
  scoreboard1 += 1;
  document.getElementById("scoreboard1-el").textContent = scoreboard1;
}

function plusTwo() {
  scoreboard1 += 2;
  document.getElementById("scoreboard1-el").textContent = scoreboard1;
}

function plusThree() {
  scoreboard1 += 3;
  document.getElementById("scoreboard1-el").textContent = scoreboard1;
}

function plusOneGuest() {
  scoreboard2 += 1;
  document.getElementById("scoreboard2-el").textContent = scoreboard2;
}

function plusTwoGuest() {
  scoreboard2 += 2;
  document.getElementById("scoreboard2-el").textContent = scoreboard2;
}

function plusThreeGuest() {
  scoreboard2 += 3;
  document.getElementById("scoreboard2-el").textContent = scoreboard2;
}