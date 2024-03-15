// console.log("dom");

// const dom1 = document.querySelector("#item1");
// const dom1 = document.querySelectorAll(".grid-item");
// const dom1 = document.querySelectorAll(".grid-item");
const dom1 = document.querySelector(".grid-item");
// console.dir(dom1);
// dom1.textContent = "World";
// dom1.style.backgroundColor = "red";
// dom1.classList.add("bg-red");

//dataset
// console.log(dom1.dataset);
const div = document.createElement("div");
div.classList.add("grid-item");
div.textContent = "7";
console.log(div);
const grid = document.querySelector(".grid");
grid.append(div);
