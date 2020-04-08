let gridContainer = document.querySelector("#grid-container");
let root = document.documentElement;
let resetButton = document.querySelector("#reset-button");

resetButton.addEventListener('click', () => resetGrid());

newGrid(16);

function resetGrid(){
	let dimension = prompt('Enter grid dimension:');	
	gridContainer.innerHTML = '';
	newGrid(+dimension);
}

function newGrid(dimension){
	root.style.setProperty("--grid-dimension", dimension);
	for(let i = 0; i < dimension ** 2; i++){
		let square = document.createElement('div');
		square.classList.add("grid-square");
		square.addEventListener("mouseenter", (e) => darken(e.target));
		gridContainer.appendChild(square);
	}
}



function darken(square){
	let currentOpacity = +square.style.opacity;
	square.style.opacity = (currentOpacity + 0.1).toString();
}