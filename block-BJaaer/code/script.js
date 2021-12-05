let form = document.querySelector("form");
let userInfo = {};
function handleSubmit(event) {
  event.preventDefault();
  userInfo.text = form.elements.text;
  userInfo.email = form.elements.email;
  userInfo.gender = form.elements.gender;
  userInfo.color = form.elements.color;
  userInfo.range = form.elements.range;
  userInfo.drone = form.elements.drone;
  userInfo.terms = form.elements.terms.checked;
  console.log(userInfo);
}
form.addEventListener("submit", handleSubmit);
