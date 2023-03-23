const formulario = document.querySelector("#cadastro-cliente");
const campos = document.querySelectorAll(".required");
const divs_input = document.querySelectorAll(".input");
const divs = document.querySelectorAll(".div-required");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const celularRegex = /^\(\d{2}\) \d{5}-\d{4}$/;

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validarNome();
    validarSobrenome();
    validarCPF();
    validarEmail();
    validarCelular();
    validarSenha();
});

function setError(index) {
    divs_input[index].style.border = "2px solid #e63636";
    divs[index].style.display = "block";
}

function removerError(index) {
    divs_input[index].style.border = "";
    divs[index].style.display = "none";
}
const validarNome = () => {
    if (campos[0].value.length < 3) {
        setError(0);
    } else {
        removerError(0);
    }
};

const validarSobrenome = () => {
    if (campos[1].value.length < 3) {
        setError(1);
    } else {
        removerError(1);
    }
};

const validarCPF = () => {
    if (campos[2].value.length < 14) {
        setError(2);
    } else {
        removerError(2);
    }
};

const validarEmail = () => {
    if (!emailRegex.test(campos[3].value)) {
        setError(3);
    } else {
        removerError(3);
    }
};

const validarCelular = () => {
    if (!celularRegex.test(campos[4].value)) {
        setError(4);
    } else {
        removerError(4);
    }
};

const validarSenha = () => {
    if (campos[5].value.length < 8) {
        setError(5);
    } else {
        removerError(5);
    }
};

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
