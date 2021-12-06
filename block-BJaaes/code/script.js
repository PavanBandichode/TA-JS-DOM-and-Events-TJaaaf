let form = document.querySelector("form");
let userError = "";
let emailError = "";
let numberError = "";
/*username */
function usernameTest(uname) {
  if (uname.value.length < 4) {
    userError = "username can't be less than 4 characters";
  } else {
    userError = "";
  }
  uname.nextElementSibling.innerText = userError;
}
/*name */
function isNumberContained(str) {
  return str.split("").some((x) => Number(x));
}
function nameTest(name) {
  if (isNumberContained(name.value)) {
    nameError = "You can't use number in the name field";
  } else {
    nameError = "";
  }
  name.nextElementSibling.innerText = nameError;
}
/*at the rate */
function doesContainAtTheRate(str) {
  return str.split("").some((x) => x === "@");
}
function emailTest(email) {
  if (!doesContainAtTheRate(email.value)) {
    emailError = "Email must contain the symbol @";
  } else if (email.value.length < 6) {
    emailError = "Email must be at least 6 characters";
  } else {
    emailError = "";
  }
  email.nextElementSibling.innerText = emailError;
}
/*phone number */
function numberTest(numberElm) {
  if (!isNumberContained(numberElm.value)) {
    numberError = "You can only use number in this field";
  } else if (numberElm.value.length < 7) {
    numberError = "Length of phone number can't be less than 7";
  } else {
    numberError = "";
  }
  numberElm.nextElementSibling.innerText = numberError;
}
/* handler function*/
function handleSubmit(event) {
  event.preventDefault();
  let elements = event.target.elements;
  let username = elements.username;
  let name = elements.name;
  let email = elements.email;
  let phNo = elements.number;
  let pass = elements.password;
  usernameTest(username);
  nameTest(name);
  emailTest(email);
  numberTest(phNo);
}
form.addEventListener("submit", handleSubmit);
