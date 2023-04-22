import React from "react";
import styles from "./index.module.css";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Botao } from "../../components/Botao";
import { Footer } from "../../components/Footer";




export function Contas() {


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
            <div className={styles.conteiner}>
                <div className={styles.titulo}>
                    <h1 className={styles.tituloPreto}> Tipos de</h1>
                    <h1 className={styles.tituloazul}>Contas</h1>
                </div>
                <div className={styles.conteudo}>
                    <div className={styles.contaConteiner}>
                        <div className={styles.conta}>
                            <h2>Corrente</h2>
                            <p>A conta corrente do Sharks Bank é a escolha ideal para quem busca praticidade e facilidade na hora de gerenciar suas finanças. Com ela, você terá acesso a um cartão de débito para fazer compras e saques, além de transferências e pagamentos de contas pelo internet banking ou aplicativo do banco. E as vantagens não param por aí: também é possível contratar serviços adicionais como investimentos, empréstimos, seguros, cartões de crédito e programas de fidelidade. A abertura da conta é fácil e rápida, podendo ser feita presencialmente em uma de nossas agências ou online pelo site ou aplicativo. E, em caso de dúvidas ou problemas, nossa equipe de atendimento está sempre pronta para ajudar. Venha para o Sharks Bank e tenha uma experiência financeira completa e descomplicada!</p>
                        </div>
                    </div>

                    <div className={styles.contaConteiner}>
                        <div className={styles.conta}>
                            <h2>Poupança</h2>
                            <p>Se você está em busca de uma forma segura e rentável de guardar seu dinheiro, a conta poupança do Sharks Bank é uma ótima opção. Com ela, você terá a vantagem de contar com uma aplicação financeira que oferece rendimentos acima da inflação, sem precisar se preocupar com a oscilação do mercado. Além disso, a conta poupança do Sharks Bank é isenta de taxas de manutenção, permitindo que você tenha mais dinheiro disponível para investir. E o melhor de tudo é que o processo de abertura é simples e rápido, podendo ser feito presencialmente em uma de nossas agências ou online pelo site ou aplicativo do banco. Invista no seu futuro financeiro com a conta poupança do Sharks Bank. Venha ser nosso cliente!</p>
                        </div>
                    </div>
                    <div className={styles.contaConteiner}>
                        <div className={styles.conta}>
                            <h2>Tubarão premium</h2>
                            <p>Se você busca uma experiência bancária única e exclusiva, precisa conhecer a conta premium do Sharks Bank. Com ela, você terá acesso a um atendimento personalizado e diferenciado, além de uma série de vantagens exclusivas como descontos em restaurantes, cinemas e lojas, além de benefícios em viagens e acesso a lounges em aeroportos. Além disso, a conta premium do Sharks Bank também oferece serviços bancários diferenciados, como um cartão de crédito com limites elevados e benefícios exclusivos, além de investimentos com rentabilidades diferenciadas. E o melhor de tudo é que o processo de abertura é fácil e rápido, podendo ser feito online pelo site ou aplicativo do banco. Viva uma experiência bancária única com a conta premium do Sharks Bank. Venha ser nosso cliente!</p>
                        </div>
                    </div>
                </div>

                {/* <div className={styles.contaConteiner}>
                    <div className={styles.conta}>
                        <p className={styles.vantagens}>
                            Ter uma conta no Sharks Bank é a escolha ideal para quem busca praticidade, segurança e rentabilidade na gestão de suas finanças. 
                            
                            
                    </div>
                </div> */}

            </div>

            <Footer />

        </>
    );
}
