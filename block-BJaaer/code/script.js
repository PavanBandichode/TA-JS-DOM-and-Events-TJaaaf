let form = document.querySelector("form");
let userInfo = {};
let model = document.querySelector(".model-form");

function handleSubmit(event) {
  event.preventDefault();

  userInfo.text = event.target.elements.text.value;
  userInfo.email = event.target.elements.email.value;
  userInfo.gender = event.target.gender.value;
  userInfo.color = event.target.elements.color.value;
  userInfo.range = event.target.elements.range.value;
  userInfo.drone = event.target.elements.drone.value;
  userInfo.terms = event.target.elements.terms.checked;
  model.classList.add("open");
  let close = document.querySelector(".close-form");
  close.addEventListener("click", () => {
    model.classList.remove("open");
  });
  displayInfo(userInfo);
}

form.addEventListener("submit", handleSubmit);

function displayInfo(data = {}) {
  model.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.innerText = `hello ${data.text}`;
  let email = document.createElement("p");
  email.innerText = `${data.email}`;
  let gender = document.createElement("p");
  gender.innerText = ` ${data.gender}`;
  let color = document.createElement("p");
  color.innerText = `${data.color}`;
  let range = document.createElement("p");
  range.innerText = ` ${data.range}`;
  let drone = document.createElement("p");
  drone.innerText = `${data.drone}`;
  let terms = document.createElement("p");
  terms.innerText = ` ${data.terms}`;
  model.append(h1, email, gender, color, range, drone, terms);
}
