import React from "react";
import { HeaderCadastro } from "./../../components/HeaderCadastro/HeaderCadastro";
import { Menu } from "../../components/Menu";
import { Botao } from "../../components/Botao";
import styles from "./cadastro.module.css";
import { Footer } from "../../components/Footer";
import { Conteudo } from "./../../components/Conteudo/index";

export function Cadastro() {
    return (
        <>
            <HeaderCadastro
                menu={<Menu></Menu>}
                botoes={
                    <div className={styles.botoesHeader}>
                        <Botao desabilitado={false} nome={"Abrir sua conta"} />
                    </div>
                }
            />
            <Conteudo />
            <Footer />
        </>
    );
}
