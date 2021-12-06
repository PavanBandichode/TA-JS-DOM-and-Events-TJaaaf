let form = document.querySelector("form");
let userError = "";
/*username */
function usernameTest(uname) {
  if (uname.value.length < 4) {
    userError = "username can't be less than 4 characters";
  } else {
    userError = "";
  }
  username.nextElementSibling.innerText = userError;
}
function handleSubmit(event) {
  event.preventDefault();
  let elements = event.target;
  let username = elements.username;
  let name = elements.name;
  let email = elements.email;
  let phNo = elements.number;
  let pass = elements.password;
  usernameTest();
}
form.addEventListener("submit", handleSubmit);
