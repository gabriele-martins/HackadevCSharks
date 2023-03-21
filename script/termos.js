const checkboxTermos = document.querySelector('#checkbox-termos');
const botaoTermosContinuar = document.querySelector('#botao-aceite-termos');
const botaoTermosCancelar = document.querySelector('#botao-cancelar-termos');
const divTextoTermos = document.querySelector('#div-texto-termos');
const pTextTermos = document.querySelector('#div-texto-termos p');

checkboxTermos.addEventListener('click', (evento) => {
	botaoTermosContinuar.disabled = checkboxTermos.checked ? false : true;
});

divTextoTermos.addEventListener('scroll', (evento) => {
	console.log(verficaScrollNoFinalDoTexto(divTextoTermos));
});

function verficaScrollNoFinalDoTexto(elemento) {
	let alturaTotalCaixaTexto = elemento.scrollHeight;
	let posicaoAtual = elemento.scrollTop;
	let compensacao = elemento.offsetHeight;

	if (posicaoAtual > alturaTotalCaixaTexto - compensacao) {
		return true;
	} else {
		return false;
	}
}
