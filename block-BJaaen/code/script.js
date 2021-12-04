let userRoot = document.querySelector(".user-icons");
let computerRoot = document.querySelector(".computer-icons");
let result = document.querySelector(".result");
let reset = document.querySelector(".reset");
let countUser = document.querySelector(".count-user");
let countComp = document.querySelector(".count-comp");
let userCount = 0;
let compCount = 0;
countUser.innerText = userCount;
countComp.innerText = compCount;
let userSelected = {},
  computerSelected = {};

let dataSet = [
  {
    name: "rock",
    beats: "sissors",
  },
  {
    name: "scissors",
    beats: "paper",
  },
  {
    name: "paper",
    beats: "rock",
  },
];
function getRandomNumber(max = 3) {
  return Math.floor(Math.random() * max);
}
function getWinner(user, computer) {
  if (user.name === computer.name) {
    result.innerText = "Its a Tie";
  } else if (user.beats === computer.name) {
    result.innerText = "User Wins";
  } else {
    result.innerText = "Computer Wins";
  }
}
function userLayout() {
  userRoot.innerHTML = "";
  dataSet.forEach((icon) => {
    let i = document.createElement("i");
    i.className = `fa fa-hand-${icon.name}`;
    if (userSelected.name === icon.name) {
      i.classList.add("selected");
    }
    i.addEventListener("click", () => {
      userSelected = icon;

      computerSelected = dataSet[getRandomNumber()];
      getWinner(userSelected, computerSelected);
      userLayout();
      computerLayout();
    });
    userRoot.append(i);
  });
}
userLayout();

function computerLayout() {
  computerRoot.innerHTML = "";
  dataSet.forEach((icon) => {
    let i = document.createElement("i");
    i.className = `fa fa-hand-${icon.name}`;
    if (computerSelected.name === icon.name) {
      i.classList.add("selected");
    }
    computerRoot.append(i);
  });
}
computerLayout();

reset.addEventListener("click", () => {
  userSelected = {};
  computerSelected = {};
  userLayout();
  computerLayout();
});

// function winner() {
//   if (userChoice.beats.join("").includes(computerChoice.name)) {
//     result.innerText = "user wins!";
//     ++userCount;
//   } else {
//     result.innerText = "computer wins!";
//     ++compCount;
//   }
//   countUser.innerText = `--- ${userChoice.name}`;
//   countComp.innerText = `--- ${computerChoice.name}`;
// }
