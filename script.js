const txt = " Hi mochi I'm testing if this works";
let i = 0;
const speed = 100;

const textElement = document.getElementById("typing");

function xD() {
  textElement.textContent = "";
}

function typeText() {
  if (i < txt.length + 1) {
    textElement.textContent += txt.charAt(i);
    i++;
    setTimeout(typeText, speed);
  }
}

setTimeout(xD, 100);
typeText();
