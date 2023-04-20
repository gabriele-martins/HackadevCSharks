import React from "react";
import styles from "./index.module.css";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Botao } from "../../components/Botao";
import { Footer } from "../../components/Footer";


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
            <div className={styles.tituloSobre}>
                <h1> Sobre nós</h1>
            </div>
            <div className = {styles.conteudoSobre}>
                <p>
                    Bem-vindo(a) ao nosso banco digital! Nós somos uma instituição financeira que tem como objetivo democratizar o acesso aos serviços bancários para todos os brasileiros, independentemente de sua renda ou localização geográfica.
                </p>
                <p>
                    Acreditamos que todos merecem ter acesso a serviços financeiros confiáveis e acessíveis, e é por isso que desenvolvemos uma plataforma digital intuitiva e fácil de usar, que permite que você faça transações bancárias com facilidade, segurança e rapidez, tudo a partir do conforto da sua casa ou escritório.
                </p>
                <p>
                    Nós valorizamos a transparência e a honestidade em tudo o que fazemos. Nós nos esforçamos para fornecer informações claras e precisas sobre nossos serviços, taxas e encargos, para que você possa tomar decisões financeiras informadas.
                </p>
                <p>
                    Além disso, estamos comprometidos em oferecer serviços financeiros que atendam às necessidades específicas de nossos clientes. Oferecemos uma ampla gama de produtos e serviços, desde contas correntes e cartões de crédito até empréstimos e investimentos, tudo projetado para atender às suas necessidades pessoais e financeiras.
                </p>
                <p>
                    Nosso objetivo é construir um relacionamento de confiança e longo prazo com nossos clientes, e estamos sempre disponíveis para ajudá-los a alcançar seus objetivos financeiros. Se você está procurando um banco digital confiável e acessível, venha nos conhecer e faça parte da nossa comunidade de clientes satisfeitos.
                </p>
            </div>
            <Footer />
        </>
    );
}
