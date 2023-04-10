import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Conteudo } from "../../components/Conteudo";
import { CampoInput } from "../../components/Inputs";
import { Botao } from "../../components/Botao";

import styles from "./style.module.css";

export function Login() {
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
                funcaoDoBotao={"/saldo"}
                nome={"Entrar"}
                type="submit"
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
