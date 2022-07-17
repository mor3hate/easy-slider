const slides = document.querySelectorAll('.slide'),
	prev = document.querySelector('.slider-prev'),
	next = document.querySelector('.slider-next'),
	total = document.querySelector('#total'),
	current = document.querySelector('#current');

let index = 1;

showSlides(index);

if (slides.length < 10) {
	total.textContent = `0${slides.length}`;
} else {
	total.textContent = `${slides.length}`;
}

function showSlides(n) {

	if (n > slides.length) {
		index = 1;
	}

	if (n < 1) {
		index = slides.length;
	}

	slides.forEach(item => {
		item.style.display = 'none';
	});
	slides[index - 1].style.display = 'block';

	if (slides.length < 10) {
		current.textContent = `0${index}`;
	} else {
		current.textContent = `${index}`;
	}
}

function plusSlides(n) {
	showSlides(index += n);
}

prev.addEventListener('click', () => {
	plusSlides(-1);
});

next.addEventListener('click', () => {
	plusSlides(1);
});
