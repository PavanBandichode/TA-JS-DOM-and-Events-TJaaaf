let root = document.querySelector("ul");
let inputText = document.getElementById("text");
let all = document.querySelector(".all");
let active = document.querySelector(".active");
let completed = document.querySelector(".completed");
let clear = document.querySelector(".clear");
let allTodos = [];
function handleInput(event) {
  let value = event.target.value;
  if (event.key === "Enter" && value !== "") {
    let todo = {
      name: value,
      isDone: false,
    };
    allTodos.push(todo);
    event.target.value = "";
    createUI(allTodos, root);
  }
}
clear.addEventListener("click", () => {
  let empty = [];
  createUI(empty, root);
});
completed.addEventListener("click", () => {
  let Completed = allTodos.filter((todo) => todo.isDone == true);
  // console.log(notCompleted);
  createUI(Completed, root);
});
active.addEventListener("click", () => {
  let notCompleted = allTodos.filter((todo) => todo.isDone == false);
  // console.log(notCompleted);
  createUI(notCompleted, root);
});
all.addEventListener("click", () => {
  createUI(allTodos, root);
});
function handleToggle(event) {
  let id = event.target.dataset.id;
  allTodos[id].isDone = !allTodos[id].isDone;
  createUI(allTodos, root);
}
function handleDelete(event) {
  let id = event.target.dataset.id;
  allTodos.splice(id, 1);
  createUI(allTodos, root);
}
function createUI(data, rootElm) {
  root.innerHTML = "";
  data.forEach((todo, index) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "checkbox");
    input.setAttribute("data-id", index);
    input.addEventListener("change", handleToggle);
    input.checked = todo.isDone;
    input.classList.add("checkbox");
    let p = document.createElement("p");
    p.classList.add("todo-text");
    p.innerText = todo.name;
    let span = document.createElement("span");
    span.classList.add("cross");
    span.innerText = "❌";
    span.setAttribute("data-id", index);
    span.addEventListener("click", handleDelete);

    li.append(input, p, span);
    rootElm.append(li);
  });
}
createUI(allTodos, root);
inputText.addEventListener("keyup", handleInput);
