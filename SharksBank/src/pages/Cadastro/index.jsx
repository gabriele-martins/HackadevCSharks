import React from "react";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Botao } from "../../components/Botao";
import { Footer } from "../../components/Footer";
import { Conteudo } from "../../components/Conteudo/index";
import { Form } from "../../components/Form/Form";

import styles from "./index.module.css";

export function Cadastro() {
  return (
    <>
      <div className={styles.body}>
        <Header
          menu={<Menu></Menu>}
          botoes={
            <Botao pagina={"/login"} desabilitado={false} nome={"Acessar"} />
          }
        />
        <Conteudo
          titulo={"SharksBank"}
          subTitulo={"Quero ser Shark!"}
          descricao={"Preencha seus dados para começar a ser shark"}
          children={<Form />}
        />
        <Footer />
      </div>
    </>
  );
}
