const checkboxTermos = document.querySelector('#checkbox-termos');
const botaoTermosContinuar = document.querySelector('#botao-aceite-termos');
const divTextoTermos = document.querySelector('#div-texto-termos');

checkboxTermos.addEventListener('click', (evento) => {
	botaoTermosContinuar.disabled = checkboxTermos.checked ? false : true;
});

divTextoTermos.addEventListener('scroll', (evento) => {
	if (verficaScrollNoFinalDoTexto(divTextoTermos)) {
		checkboxTermos.disabled = false;
	}
});

function verficaScrollNoFinalDoTexto(elemento) {
	let alturaTotalCaixaTexto = elemento.scrollHeight;
	let posicaoAtual = elemento.scrollTop;
	let compensacao = elemento.offsetHeight;

	return posicaoAtual > alturaTotalCaixaTexto - compensacao;
}
