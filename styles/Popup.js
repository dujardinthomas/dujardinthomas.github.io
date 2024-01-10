const modal1 = document.querySelector('.popupShowTutorat');
const modal2 = document.querySelector('.popupShowClassification');
const modal3 = document.querySelector('.popupShowAPI');
const modal4 = document.querySelector('.popupShowMatrix');
// const modal5 = document.querySelector('.popupShowTonCovoitUniv');
const modal6 = document.querySelector('.popupShowDepInfo');
const modal7 = document.querySelector('.popupShowUniplanify');


let popupContent = document.querySelector('.popupContent');


modal1.addEventListener('click', event => {
	showPopup(event, 'tutorat.html');
});


modal2.addEventListener('click', event => {
	showPopup(event, 'classification.html');
});


modal3.addEventListener('click', event => {
	showPopup(event, 'pizzaland.html');
});


modal4.addEventListener('click', event => {
	showPopup(event, 'matrix.html');
});


// modal5.addEventListener('click', event => {
// 	showPopup(event, 'tonCovoitUniv.html');
// });


modal6.addEventListener('click', event => {
	showPopup(event, 'depInfo.html');
});

modal7.addEventListener('click', event => {
	showPopup(event, 'uniplanify.html');
});


function showPopup(event, projet) {
	event.preventDefault();
	const popup = new Popup('.popup');
	popup.open();

	fetch(`./projets/${projet}`)
		.then(response => response.text())
		.then(responseText => popupContent.innerHTML = responseText);

	document
		.querySelector('.popup')
		.querySelector('.closeButton')
		.addEventListener('click', event => {
			popup.close();
		});

	window.addEventListener("click", function (event) {
		if (event.target == popup) {
			popup.close()
		}
	});

	window.addEventListener("keydown", function(event) {
			popup.close();  //quand échap
	  }); 
}

class Popup {
	element;

	constructor(element) {
		this.element = document.querySelector(element);
		if (element == 'closebutton') {
			this.element.addEventListener('click', close());
		}
	}

	open() {
		this.element.classList.add('visible');
	}

	close() {
		this.element.classList.remove('visible');
	}
}