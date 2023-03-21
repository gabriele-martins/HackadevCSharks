const checkboxTermos = document.querySelector('#checkbox-termos');
const botaoTermos = document.querySelector('#botao-aceite-termos');

checkboxTermos.addEventListener('click', (evento) => {
	console.log(checkboxTermos.checked);

	// console.log(botaoTermos.getAttribute('disabled'));

	// if (checkboxTermos.checked) {
	// 	botaoTermos.disabled = true;
	// }else

	botaoTermos.disabled = checkboxTermos.checked ? false : true;
});
