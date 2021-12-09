let ul = document.querySelector("ul");
let rootButtons = document.querySelector(".nav-buttons");
let allHouses = got.houses.map((house) => house.name);
let allPeople = got.houses.map((x) => x.people).flat(Infinity);
let search = document.querySelector(".search");
function navButtonsUI() {
  rootButtons.innerHTML = "";
  allHouses.forEach((house) => {
    let button = document.createElement("button");
    button.classList.add("btn", "text-md");
    button.innerText = house;
    rootButtons.append(button);
    button.addEventListener("click", () => {
      let peopleOfHouse = got.houses.find(
        (currHouse) => currHouse.name === house
      ).people;
      createUI(peopleOfHouse);
      navButtonsUI(allHouses);
    });
  });
}
navButtonsUI(allHouses);

function createUI(data) {
  ul.innerHTML = "";
  data.forEach((people) => {
    let li = document.createElement("li");
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = people.image;
    let h3 = document.createElement("h3");
    h3.innerText = people.name;
    h3.classList.add("text-lg");
    let p = document.createElement("p");
    p.innerText = people.description;
    p.classList.add("text-sm");
    let button = document.createElement("button");
    button.innerText = "Learn More!";
    button.classList.add("btn", "text-md");
    div.append(img, h3);
    li.append(div, p, button);
    ul.append(li);
  });
}
createUI(allPeople);

function handleSearch(event) {
  let searchText = event.target.value;
  let filteredPeople = allPeople.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );
  createUI(filteredPeople);
}
search.addEventListener("input", handleSearch);
