import React from "react";
import styles from "./index.module.css";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Botao } from "../../components/Botao";
import { Footer } from "../../components/Footer";
import ListaAjuda from "../../components/ListaAjuda";



export function Ajuda() {

   
    return (
        <>
            <Header
                menu={<Menu></Menu>}
                botoes={
                    <div className={styles.botoesHeader}>
                        <Botao
                            pagina={"/termos"}
                            desabilitado={false}
                            nome={"Abrir sua conta"}
                        />
                        <Botao pagina={"/login"} desabilitado={false} nome={"Acessar"} />
                    </div>
                }
            />
             
            <div className={styles.tituloAjuda}>
                <h1> Dúvidas frequentes</h1>
            </div>
            <div className={styles.conteudoAjuda}>
                <ListaAjuda />
            </div>
    
            <Footer />
            
        </>
    );
}
