const inputNome = document.querySelector("#cpf");
const inputSenha = document.querySelector("#senha");
const botaoEntrar = document.querySelector(".div-form-item button");
const formularioLogin = document.querySelector("#login-form");

formularioLogin.addEventListener("submit", (e) => {
  console.log(inputNome.value);
});
