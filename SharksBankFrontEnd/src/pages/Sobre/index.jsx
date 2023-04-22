import React from "react";
import styles from "./index.module.css";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Botao } from "../../components/Botao";
import { Footer } from "../../components/Footer";
import { Integrante } from "../../components/Integrante";


export function Sobre() {

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
            <div className={styles.titulo}>
                <h1 className={styles.tituloPreto}>Conheça os <span className={styles.tituloazul}>Sharks</span></h1>
            </div>

            <div className={styles.conteudoConteiner}>
                <div className={styles.integranteLinha1}>
                    <Integrante
                        nome = "Gabriele Martins"
                        imagem = "https://github.com/gabriele-martins.png"
                        github={"https://github.com/gabriele-martins"}
                        linkedin={"https://www.linkedin.com/in/gabriele-martins-pereira/"}
                    />
                    <Integrante
                        nome = "Marco Sousa"
                        imagem = "https://github.com/marccosousa.png"
                        github={"https://github.com/marccosousa"}
                        linkedin={"https://www.linkedin.com/in/marccosousa/"}
                    />
                    <Integrante
                        nome = "Keiler Trindade"
                        imagem = "https://github.com/keilertrindade.png"
                        github={"https://github.com/keilertrindade"}
                        linkedin={"https://www.linkedin.com/in/keilertrindade/"}
                    />
                    <Integrante
                        nome = "João Victor Evangelista"
                        imagem = "https://github.com/jvbevangelista.png"
                        github={"https://github.com/jvbevangelista"}
                        linkedin={"https://www.linkedin.com/in/jvbevangelista/"}
                    />
                </div>
                <div className={styles.integranteLinha2}>               
                    <Integrante
                        nome = "Raylson Moreira"
                        imagem = "https://github.com/Lmraylson26.png"
                        github={"https://github.com/Lmraylson26"}
                        linkedin={"https://www.linkedin.com/in/raylson-moreira-4836b8228/"}
                    />
                    <Integrante
                        nome = "Bruno Soares"
                        imagem = "https://github.com/brunosas88.png"
                        github={"https://github.com/brunosas88"}
                        linkedin={"https://www.linkedin.com/in/brunosas/"}
                    />
                    <Integrante
                        nome = "Taís Saito"
                        imagem = "https://github.com/TaisSaito.png"
                        github={"https://github.com/TaisSaito"}
                        linkedin={"linkedin.com/in/taís-saito-tavares-515871207"}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}
