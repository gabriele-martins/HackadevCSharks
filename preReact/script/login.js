const inputNome = document.querySelector("#cpf");
const inputSenha = document.querySelector("#senha");
const botaoEntrar = document.querySelector(".div-form-item button");

inputNome.addEventListener("input", (evento) => {
  validaInput(inputNome, inputSenha);
});

inputSenha.addEventListener("input", (evento) => {
  validaInput(inputNome, inputSenha);
});

function validaInput(inputNome, inputSenha) {
  botaoEntrar.disabled = !(
    inputNome.value.length !== 0 && inputSenha.value.length !== 0
  );
}
