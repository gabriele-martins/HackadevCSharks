const form = document.querySelector("#form");
let campos = document.querySelectorAll(".required");
let divs = document.querySelectorAll(".div-required");
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

const submitButton = document.querySelector("#login");
const nomeInput = document.querySelector("#nome");
const sobrenomeInput = document.querySelector("#sobrenome");
const errorMessage = document.querySelector(".msg");
//const cpfInput = document.querySelector("#cpf");
//const emailInput = document.querySelector("#email");
//const celularInput = document.querySelector("#celular");
//const senhaInput = document.querySelector("#senha");

function mascaras() {
    mascaraCPF();
    mascaraCelular();
}

function mascaraCPF() {
    const cpfInput = document.querySelector("#cpf");
    cpfInput.addEventListener("input", () => {
        let cpf = cpfInput.value;
        cpf = cpf.replace(/\D/g, "");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        cpfInput.value = cpf;
    });
}

function mascaraCelular() {
    const celularInput = document.querySelector("#celular");
    celularInput.addEventListener("input", () => {
        let celular = celularInput.value;
        celular = celular.replace(/\D/g, "");

        if (celular.length > 2) {
            celular = `(${celular.substring(0, 2)}) ${celular.substring(2)}`;
        }

        if (celular.length > 6) {
            celular = `${celular.substring(0, 10)}-${celular.substring(10)}`;
        }
        celularInput.value = celular;
    });
}
