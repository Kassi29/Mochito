const texts = [
  "I was wandering if you...",
  "..u know.. if you want to...",
  ".. if u want of course..",
  "u want to be... my...my",
];

const speed = 100;
const initialText = document.getElementById("initial-text");
const textElement = document.getElementById("typing");

function xD() {
  textElement.remove();
}

function valentine() {
  const textElement = document.createElement("span");
  initialText.appendChild(textElement);

  const txt = "MY VALENTINE?";
  let i = 0;

  function typing() {
    if (i < txt.length) {
      textElement.textContent += txt.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
  }
  typing();
}

function typeText(txt, textElement, callback) {
  let i = 0;
  function typing() {
    if (i < txt.length) {
      textElement.textContent += txt.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else {
      callback();
    }
  }
  typing();
}

function startTyping() {
  let i = 0;

  function typeNextLine() {
    if (i < texts.length) {
      const newDiv = document.createElement("div");
      initialText.appendChild(newDiv);

      typeText(texts[i], newDiv, () => {
        i++;
        typeNextLine();
      });
    }
  }

  typeNextLine();
}

setTimeout(xD, 100);
setTimeout(startTyping, 90);
setTimeout(valentine, 11000);
