const checkboxTermos = document.querySelector('#checkbox-termos');
const botaoTermosContinuar = document.querySelector('#botao-aceite-termos');
const botaoTermosCancelar = document.querySelector('#botao-cancelar-termos');

checkboxTermos.addEventListener('click', (evento) => {
	botaoTermosContinuar.disabled = checkboxTermos.checked ? false : true;
});
