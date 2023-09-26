const container = document.querySelector(".container");

let gridsize = 4;

function makeGrid(event) {
	for (let i = 0; i < gridsize * gridsize; i++) {
		const box = document.createElement("div");
		box.classList.add("grid");
		box.style.width = 100 / gridsize + "%";
		container.appendChild(box);
	}
}

function setGrid(event) {
	const boxes = document.querySelectorAll(".grid");
	boxes.forEach((box) => box.remove());

	let input = prompt("Please enter the desired grid dimensions (1-100)", 4);
	let value = Number(input);
	if (!Number.isInteger(value) || value > 100 || value < 1) {
		setGrid();
	} else {
		gridsize = value;
		makeGrid();
		const boxes = document.querySelectorAll(".grid");
		boxes.forEach((box) => box.addEventListener("mouseover", draw));
	}
}

function draw(event) {
	this.classList.add("hov");
}

function removeColor(event) {
	const boxes = document.querySelectorAll(".grid");
	boxes.forEach((box) => box.classList.remove("hov"));
}

document.addEventListener("load", makeGrid());
const boxes = document.querySelectorAll(".grid");
boxes.forEach((box) => box.addEventListener("mouseover", draw));

const clr = document.querySelector("button.clr");
clr.addEventListener("click", removeColor);

const sizing = document.querySelector("button.sizing");
sizing.addEventListener("click", setGrid);
