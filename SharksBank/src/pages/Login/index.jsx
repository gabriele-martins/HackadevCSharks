import React, { useState } from "react";
import { Conteudo } from "../../components/Conteudo";
import { Botao } from "../../components/Botao";
import styles from "./style.module.css";
export function Login() {
  const [cpfValido, setCpfValido] = useState(false);
  const [senhaValida, setSenhaValida] = useState(false);
  const [cpfDados, setCpfDados] = useState("");
  const [senhaDados, setSenhaDados] = useState("");

  function handleCpfDados(evento) {
    setCpfDados(evento.target.value);
    if (cpfDados.trim() !== "") setCpfValido(true);
    else setCpfValido(false);
    console.log("cpf: " + cpfValido);
  }

  function handleSenhaDados(evento) {
    setSenhaDados(evento.target.value);
    if (senhaDados.trim() !== "") setSenhaValida(true);
    else setSenhaValida(false);
    console.log("senha: " + senhaValida);
  }

  function handleHabilitaBotao() {
    return senhaValida && cpfValido;
  }

  return (
    <>
      <Conteudo
        titulo={"Sharks Bank"}
        subTitulo={"O banco digital que nada com você!"}
        descricao={
          "Com o Sharks Bank você nunca está sozinho em suas transações bancárias e investimentos, pois o banco nada junto com você em direção ao sucesso financeiro."
        }
        descricaoContinuacao={
          "Conheça o Sharks Bank hoje e mergulhe no futuro das finanças digitais."
        }
      >
        <div id={styles["login-form-div"]}>
          <form action="" id={styles["login-form"]}>
            <div className={styles.divFormItem}>
              <input
                type="text"
                name="cpf"
                id="cpf"
                value={cpfDados}
                onInput={handleCpfDados}
                onBlur={handleCpfDados}
                placeholder="Digite seu CPF"
              />
            </div>
            <div className={styles.divFormItem}>
              <input
                type="password"
                name="senha"
                id="senha"
                value={senhaDados}
                onInput={handleSenhaDados}
                onBlur={handleSenhaDados}
                placeholder="Digite sua senha"
              />
            </div>
            <div className={styles.divFormItem}>
              <Botao
                nome={"Entrar"}
                desabilitado={!(cpfValido && senhaValida)}
              ></Botao>
            </div>
            <div className={styles.divFormItem}>
              <a href="">Esqueceu a senha?</a>
            </div>
          </form>
        </div>
      </Conteudo>
    </>
  );
}
