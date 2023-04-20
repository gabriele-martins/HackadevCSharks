import React from "react";
import styles from "./index.module.css";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Botao } from "../../components/Botao";
import { Footer } from "../../components/Footer";
import group from "../../assets/group.jpg";




export function SharksBank() {


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

            <div className={styles.conteudo}>
                <h1> Nossa equipe</h1>
                <h3>Para nós do Sharks Bank, o trabalho em equipe é a chave para o sucesso!</h3>
                <div className={styles.container}>
                    <div className={styles.colunaEsquerda}>
                        <div className={styles.imagem}>
                            <img src={group} alt="Imagem Equipe SharksBank" />
                        </div>
                    </div>
                    <div className={styles.colunaDireita}>

                        <p>
                            O sucesso de qualquer empresa depende em grande parte da qualidade de sua equipe de funcionários. Isso é particularmente verdadeiro no setor bancário, onde a competição é feroz e os clientes exigem um alto nível de serviço e segurança financeira. O Sharks Bank é um excelente exemplo de uma instituição financeira que valoriza seus funcionários e reconhece a importância de investir em seu desenvolvimento.

                        </p>
                        <p>
                            A equipe de funcionários do Sharks Bank é formada por indivíduos altamente capacitados e experientes, que são dedicados a oferecer o melhor serviço possível aos seus clientes. Desde o atendimento ao cliente até a gestão de contas e operações bancárias, cada membro da equipe é treinado para atender aos altos padrões de qualidade do Sharks Bank.
                        </p>
                        {/* <p>
                        O Sharks Bank valoriza seus funcionários de várias maneiras. Primeiro, a instituição oferece programas de treinamento e desenvolvimento para garantir que seus funcionários tenham as habilidades necessárias para atender às necessidades em constante mudança de seus clientes. Além disso, o banco oferece salários e benefícios competitivos para atrair e reter os melhores talentos do setor.
                    </p>
                    <p>
                        O sucesso do Sharks Bank também se deve ao seu compromisso com a inovação. O banco está sempre procurando maneiras de melhorar a experiência do cliente e introduzir novos produtos e serviços financeiros. Isso requer uma equipe de funcionários altamente qualificados e motivados que possam contribuir com ideias e soluções criativas.
                    </p>
                    <p>
                        No entanto, o Sharks Bank não apenas valoriza seus funcionários, mas também se preocupa com a comunidade em que atua. O banco entende que seu sucesso depende do sucesso de seus clientes e, por isso, oferece uma ampla gama de serviços financeiros para ajudá-los a gerenciar suas finanças de forma eficaz e segura.
                    </p>
                    <p>
                        Em resumo, a equipe de funcionários do Sharks Bank é fundamental para o sucesso da instituição. O banco valoriza seus funcionários e investe em seu desenvolvimento para garantir que eles possam oferecer o melhor serviço possível aos seus clientes. Além disso, o Sharks Bank está comprometido com a inovação e com a oferta de serviços financeiros de alta qualidade para ajudar seus clientes a gerenciar suas finanças de forma eficaz e segura.
                    </p> */}
                    </div>

                </div>
                {/* <div className={styles.metadeInferior}>
                    <h1>Nossos ideais são:</h1>
                </div> */}
            </div>


            <Footer />

        </>
    );
}
