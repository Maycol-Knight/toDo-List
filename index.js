// console.log("dom");

// const dom1 = document.querySelector("#item1");
// dataset
// console.log(dom1.dataset.custom);
// const dom1 = document.querySelectorAll(".grid-item");
// const dom1 = document.querySelectorAll(".grid-item");
// const dom1 = document.querySelector(".grid-item");
// console.dir(dom1);
// dom1.textContent = "World";
// dom1.style.backgroundColor = "red";
// dom1.classList.add("bg-red");

//dataset
// console.log(dom1.dataset);

//Modificar el DOM
// const div = document.createElement("div");
// div.classList.add("grid-item");
// div.textContent = "7";
// console.log(div);
// const grid = document.querySelector(".grid");
// grid.append(div);

//Usando el innerHTML
// const div8 = `<div class="grid-item" data-color="red">8</div>`;
// grid.innerHTML = grid.innerHTML + div8;
// console.log(grid.innerHTML);

//Forms
// const form = document.querySelector("form");
// console.log(form);
// const newInput = `<input type="password" />`;
// form.innerHTML = form.innerHTML + newInput;
//events
const dom1 = document.querySelector("#item1");
// dom1.addEventListener("click", (event) =>
//   console.log((event.target.style.backgroundColor = "red"))
// );
// Event delegation
const handleClick = (event) => {
  if (event.target.classList.contains("grid-item")) {
    console.log(
      (event.target.style.backgroundColor = event.target.dataset.color)
    );
  }
};
const grid = document.querySelector(".grid");
grid.addEventListener("click", handleClick);
