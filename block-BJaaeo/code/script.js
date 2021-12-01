let display = document.querySelector(".display");
let initialValue = "";
display.innerText = initialValue;

function eventHandler(event) {
  if (event.target.innerText === "=") {
    display.innerText = eval(display.innerText);
  } else if (event.target.innerText === "C") {
    display.innerText = initialValue;
  }
  //   if (display.innerText == initialValue) {
  //     display.innerText = event.target.innerText;
  else {
    display.innerText += event.target.innerText;
  }
}

let btn = document.querySelectorAll(".btn");
btn.forEach((button) => {
  button.addEventListener("click", eventHandler);
});
