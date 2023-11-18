const btn1 = document.querySelector("#btn1");
const h1 = document.querySelector("h1");

function rand() {
  return Math.floor(Math.random() * 255);
}

function randColor() {
  return `rgb( ${rand()}, ${rand()}, ${rand()})`;
}

function changeBg() {
  const newColor = randColor();
  document.body.style.background = newColor;
  h1.innerHTML = newColor;
}

btn1.addEventListener("click", changeBg);
