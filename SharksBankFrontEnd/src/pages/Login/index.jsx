import React from "react";
import { useNavigate, Link, useNavigation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Conteudo } from "../../components/Conteudo";
import { CampoInput } from "../../components/Inputs";
import { Botao } from "../../components/Botao";
import { Footer } from "../../components/Footer";
import { Navigate } from "react-router-dom";

import styles from "./style.module.css";

export function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    console.log(data);
    let cpf = data.cpf;
    let senha = data.senha;
    const resposta = await fetch("https://localhost:7130/api/Login/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //credentials: 'include',
      body: JSON.stringify({
        cpf,
        senha,
      }),
    });
    const conteudo = await resposta.json();

    if (conteudo.message) alert(conteudo.message);
    else
      navigate("/saldo", {
        state: {
          conteudo: conteudo.usuario,
        },
      });
  };

  return (
    <>
      <Header
        menu={<Menu></Menu>}
        botoes={
          <Botao
            pagina={"/termos"}
            desabilitado={false}
            nome={"Abrir sua conta"}
          />
        }
      />
      <Conteudo
        titulo={"Sharks Bank"}
        subTitulo={"O banco digital que nada com você!"}
        descricao={
          "Com o Sharks Bank você nunca está sozinho em suas transações bancárias e investimentos, pois o banco nada junto com você em direção ao sucesso financeiro."
        }
      >
        <div id={styles["login-form-div"]}>
          <form onSubmit={handleSubmit(onSubmit)} id={styles["login-form"]}>
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
              <Botao nome={"Entrar"} type="submit"></Botao>
            </div>
            <div className={styles.divFormItem}>
              <Link to="/senha">Esqueceu a senha?</Link>
            </div>
          </form>
        </div>
      </Conteudo>
      <Footer></Footer>
    </>
  );
}
