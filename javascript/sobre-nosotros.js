import moment from 'moment-timezone';
/*menu responsive*/
const hamburguer = document.querySelector('.menu-ham');
const links = document.querySelector('ul');
const bars = document.querySelectorAll('.menu-ham span');
hamburguer.addEventListener('click', function () {
	links.classList.toggle('show');
	bars.forEach(function (child) {
		child.classList.toggle('animation');
	});
});

/*hora en Bangkok*/
let date = moment();
date.tz('Asia/Bangkok');
document.getElementById('hora-bangkok').innerHTML = date.format('LT');

/*validación de formulario*/
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const errorname = document.getElementById('warning-name');
const erroremail = document.getElementById('warning-email');
const errormessage = document.getElementById('warning-message');

form.addEventListener('submit', function (evt) {
	evt.preventDefault();
	let warningname = '';
	let warningemail = '';
	let warningmessage = '';
	let getin = false;
	let regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	errorname.innerHTML = '';
	erroremail.innerHTML = '';
	errormessage.innerHTML = '';

	if (name.value.length <= 2 || name.value.length >= 40) {
		warningname += 'El nombre debe tener entre 2 y 40 caracteres.';
		getin = true;
	}

	if (!regexpEmail.test(email.value)) {
		warningemail += 'El formato de email que se ha introducido es incorrecto.';
		getin = true;
	}

	if (message.value.length <= 5 || message.value.length >= 250) {
		warningmessage += 'El mensaje debe tener entre 5 y 250 caracteres.';
		getin = true;
	}

	if (getin) {
		errorname.innerHTML = warningname;
		erroremail.innerHTML = warningemail;
		errormessage.innerHTML = warningmessage;
	}
});
