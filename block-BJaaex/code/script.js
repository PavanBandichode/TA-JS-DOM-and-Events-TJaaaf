// Card data
const cardsArray = [
  {
    name: "shell",
    img: "blueshell.png",
  },
  {
    name: "star",
    img: "star.png",
  },
  {
    name: "bobomb",
    img: "bobomb.png",
  },
  {
    name: "mario",
    img: "mario.png",
  },
  {
    name: "luigi",
    img: "luigi.png",
  },
  {
    name: "peach",
    img: "peach.png",
  },
  {
    name: "1up",
    img: "1up.png",
  },
  {
    name: "mushroom",
    img: "mushroom.png",
  },
  {
    name: "thwomp",
    img: "thwomp.png",
  },
  {
    name: "bulletbill",
    img: "bulletbill.png",
  },
  {
    name: "coin",
    img: "coin.png",
  },
  {
    name: "goomba",
    img: "goomba.png",
  },
];
// Grab the div with an id of root
const game = document.getElementById("game");

// Create a section with a class of grid
const grid = document.createElement("section");
grid.setAttribute("class", "grid");

// Append the grid section to the game div
game.append(grid);
// For each item in the cardsArray array...
cardsArray.forEach((item) => {
  let card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = item.name;
  card.style.backgroundImage = `url(${item.img})`;
  grid.append(card);
});
