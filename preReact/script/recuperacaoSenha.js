const inputCpf = document.querySelector("#cpf");
const botaoEnviar = document.querySelector(".div-form-item button");

inputCpf.addEventListener("input", (evento) => {
  botaoEnviar.disabled = !(inputCpf.value.length !== 0);
  console.log(inputCpf.value.length);
});
