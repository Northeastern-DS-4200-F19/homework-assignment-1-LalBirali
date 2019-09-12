let myIMG = document.querySelector("img");

myIMG.onclick = function() {
	let mySrc = myIMG.getAttribute("src");
	if (mySrc === "images/firefox-icon.png") {
		myIMG.setAttribute("src", "images/firefox2.png");
	} else {
		myIMG.setAttribute("src", "images/firefox-icon.png");
	}
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	let myName = prompt("Please for the love of everything holy, enter your name");
	if (!myName || myName === null) {
		setUserName();
	}
	localStorage.setItem("name", myName);
	myHeading.textContent = "Mozilla is so so so cool," + myName;
	
}

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	let storedName = localStorage.getItem("name");
	myHeading.textContent = "Mozilla is better than Chrome " + storedName;
}

myButton.onclick = function() {
	setUserName();
}