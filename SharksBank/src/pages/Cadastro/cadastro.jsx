import React from "react";
import { HeaderCadastro } from "./../../components/HeaderCadastro/HeaderCadastro";
import { Menu } from "../../components/Menu";
import { Botao } from "../../components/Botao";
import styles from "./cadastro.module.css";
import { Footer } from "../../components/Footer";
import { Conteudo } from "./../../components/Conteudo/index";
import { Form } from "../../components/Form/Form";

export function Cadastro() {
    return (
        <>
            <div className={styles.body}>
                <HeaderCadastro
                    menu={<Menu></Menu>}
                    botoes={
                        <div className={styles.botoesHeader}>
                            <Botao desabilitado={false} nome={"Acessar"} />
                        </div>
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
