'use strict';

var modalCloseButton = document.querySelector(".modal--close-button"),
	modalWindow = document.querySelector(".modal"),
	loginButton = document.querySelector(".user-block--link"),
	modalOverlay = document.querySelector(".modal--overlay");

loginButton.onclick = function() {
	modalWindow.classList.toggle("modal__active");
	modalOverlay.classList.toggle("modal--overlay__active");
	return false;
}

modalCloseButton.onclick = function() {
  modalWindow.classList.toggle("modal__active");
  modalOverlay.classList.toggle("modal--overlay__active");
}


var featuresButtonBottom = document.querySelector(".features--button__bottom"),
	featuresButtonTop = document.querySelector(".features--button__top"),
	featuresColumn = document.querySelectorAll(".features--column");

featuresButtonBottom.onclick = function() {
	featuresButtonBottom.classList.toggle("features__not-active");
	featuresButtonTop.classList.toggle("features__active");
	for (var i = 0; i < featuresColumn.length; i++) {
		featuresColumn[i].classList.toggle("features__active");
	}
}

featuresButtonTop.onclick = function() {
	featuresButtonBottom.classList.toggle("features__not-active");
	featuresButtonTop.classList.toggle("features__active");
	for (var i = 0; i < featuresColumn.length; i++) {
		featuresColumn[i].classList.toggle("features__active");
	}
}