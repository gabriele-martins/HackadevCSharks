import React from "react";
import { useForm } from "react-hook-form";
import { Botao } from "../../components/Botao";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Conteudo } from "../../components/Conteudo";
import { CampoInput } from "../../components/Inputs";
import { Mascara } from "../../util/tipoMascara";

import styles from "./index.module.css";

export function Senha() {
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Header
        menu={<Menu></Menu>}
        botoes={
          <Botao pagina={"/login"} desabilitado={false} nome={"Acessar"} />
        }
      />
      <Conteudo
        titulo={"Recupere sua senha"}
        descricao={
          "Digite seu CPF para receber um e-mail de recuperação de senha."
        }
      >
        <div className={styles.colunaEsquerda}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CampoInput
              nome={"cpf"}
              placeholder={"CPF"}
              mascara={Mascara.CPF}
              campoReferencia={"cpf"}
              padrao={/^[0-9]|-|.*$/}
              register={register}
              errors={errors}
              tamanhoMax={14}
              tamanhoMin={14}
              obrigatorio={true}
            />
            <Botao type="submit" desabilitado={false} nome={"Enviar"} />
          </form>
        </div>
      </Conteudo>
      <Footer />
    </>
  );
}
