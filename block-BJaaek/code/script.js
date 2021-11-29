let banner = document.querySelector(".banner");
let box1 = document.querySelector(".first");
let banner1 = document.querySelector(".banner1");
let box2 = document.querySelector(".second");
banner.addEventListener("click", function () {
  box1.style.backgroundColor = "red";
});

banner1.addEventListener("mousemove", function () {
  box2.style.backgroundColor = "green";
});
