let container = document.querySelector(".container");

function randomNumber() {
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  number = "";
  for (let i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random() * 10).toString();
    number += numbers[randomNumber];
  }
  return number;
}
function randomBackground() {
  let hexCodeArray = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  color = "#";
  for (let i = 0; i < 6; i++) {
    let randomColor = Math.floor(Math.random() * 16);
    color += hexCodeArray[randomColor];
  }
  return color;
}

let count = 1000;
for (i = count; i > 0; i--) {
  let divChild = document.createElement("div");
  divChild.classList.add("box");
  divChild.innerText = randomNumber();
  divChild.style.backgroundColor = randomBackground();
  container.append(divChild);
}
let randBoxes = document.querySelectorAll(".box");
function changeBg() {
  randBoxes.forEach((x) => {
    x.innerText = randomNumber();
    x.style.backgroundColor = randomBackground();
  });
}
container.addEventListener("mouseover", changeBg);
