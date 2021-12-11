let inputVal = document.querySelector(`input[type="text"]`);
let initialValue = "";
inputVal.value = initialValue;
let ul = document.querySelector(".output");
function movieInputHandler() {
  let li = document.createElement("li");
  let input = document.createElement("input");
  input.type = "checkbox";
  input.id = "1";
  let label = document.createElement("label");
  label.for = "1";
  label.innerText = inputVal.value;
  var span = document.createElement("span");
  span.classList.add("removeIt");
  span.innerText = "x";
  li.append(input, label, span);
  inputVal.value = initialValue;
  return li;
}
inputVal.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    ul.append(movieInputHandler());
  }
});
ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("removeIt")) {
    event.target.parentElement.remove();
  }
});
