/******************** Versione con includes *******************/
// const button = document.getElementById("button-toggle");
// const image = document.getElementById("image-bulb");

// button.addEventListener("click", function() {
// 	console.log("Bottone cliccato!", image.src);

// 	if ( image.src.includes("white_lamp.png") ) {
// 		image.src = "./img/yellow_lamp.png";
// 		button.innerText = "Spegni lampadina"
// 	} else {
// 		image.src = "./img/white_lamp.png";
// 		button.innerText = "Accendi lampadina"
// 	}

// });

/********************* Versione con booleano globale **********/

// const button = document.getElementById("button-toggle");
// const image = document.getElementById("image-bulb");
// let isLampadinaAccesa = false;

// button.addEventListener("click", function() {
// 	console.log("Bottone cliccato!", isLampadinaAccesa);

// 	if ( isLampadinaAccesa ) {
// 		image.src = "./img/white_lamp.png";
// 		button.innerText = "Accendi lampadina";
		
// 	} else {
// 		image.src = "./img/yellow_lamp.png";
// 		button.innerText = "Spegni lampadina";
// 	}

// 	isLampadinaAccesa = !isLampadinaAccesa;

// });

/******************* versione con classi **********************/

const button = document.getElementById("button-toggle");
const image = document.getElementById("image-bulb");

button.addEventListener("click", function() {
	const isLampadinaAccesa = image.classList.contains("on");
	// debugger;
	console.log("Bottone cliccato!", isLampadinaAccesa);

	if ( isLampadinaAccesa ) {
		image.src = "./img/white_lamp.png";
		button.innerText = "Accendi lampadina";
		
	} else {
		image.src = "./img/yellow_lamp.png";
		button.innerText = "Spegni lampadina";
	}

	image.classList.toggle("on");

});