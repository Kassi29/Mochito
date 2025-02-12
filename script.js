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

function buttons() {
  const div = document.createElement("div");
  div.setAttribute("id", "buttons");

  const button1 = document.createElement("button");
  const button2 = document.createElement("button");

  button1.textContent = "YES";
  button2.textContent = "NO";

  button1.setAttribute("id", "yes-btn");
  button2.setAttribute("id", "no-btn");

  div.appendChild(button1);
  div.appendChild(button2);

  initialText.appendChild(div);
}

//buttons();
setTimeout(xD, 100);
setTimeout(startTyping, 90);
setTimeout(valentine, 11000);
setTimeout(buttons, 12000);
