import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Conteudo } from "../../components/Conteudo";
import { CampoInput } from "../../components/Inputs";
import { Botao } from "../../components/Botao";
import styles from "./style.module.css";
export function Login() {
  // const [cpfValido, setCpfValido] = useState(false);
  // const [senhaValida, setSenhaValida] = useState(false);
  // const [cpfDados, setCpfDados] = useState("");
  // const [senhaDados, setSenhaDados] = useState("");

  // function handleCpfDados(evento) {
  //   setCpfDados(evento.target.value);
  //   if (cpfDados.trim() !== "") setCpfValido(true);
  //   else setCpfValido(false);
  //   console.log("cpf: " + cpfValido);
  // }

  // function handleSenhaDados(evento) {
  //   setSenhaDados(evento.target.value);
  //   if (senhaDados.trim() !== "") setSenhaValida(true);
  //   else setSenhaValida(false);
  //   console.log("senha: " + senhaValida);
  // }

  // function handleHabilitaBotao() {
  //   return senhaValida && cpfValido;
  // }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => console.log(data);

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
          <form onSubmit={handleSubmit(onSubmit)} id={styles["login-form"]}>
            {/* <div className={styles.divFormItem}>
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
            </div> */}
            <div className={styles.divFormItem}>
              <CampoInput
                campoReferencia={"cpf"}
                placeholder={"Digite seu cpf"}
                obrigatorio={true}
                padrao={/^[0-9]*$/}
                tamanhoMax={11}
                tamanhoMin={11}
                register={register}
                errors={errors}
              />
            </div>
            <div className={styles.divFormItem}>
              <CampoInput
                placeholder={"Digite sua senha"}
                tipo={"password"}
                campoReferencia={"senha"}
                tamanhoMin={6}
                tamanhoMax={6}
                obrigatorio={true}
                register={register}
                errors={errors}
              />
            </div>
            <div className={styles.divFormItem}>
              <Botao
                nome={"Entrar"}
                type="submit"
                //desabilitado={!(cpfValido && senhaValida)}
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
