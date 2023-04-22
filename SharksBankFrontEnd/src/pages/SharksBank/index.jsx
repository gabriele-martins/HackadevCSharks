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
            <div className={styles.titulo}>
                    <h1 className={styles.tituloPreto}> Nossa</h1>
                    <h1 className={styles.tituloazul}>História</h1>
                </div>
                 {/* <h3>Para nós do Sharks Bank, o trabalho em equipe é a chave para o sucesso!</h3> */}
                <div className={styles.container}>
                    <div className={styles.colunaEsquerda}>
                        <div >
                            <img className={styles.imagem} src={group} alt="Imagem Equipe SharksBank" />
                        </div>
                    </div>
                    <div className={styles.colunaDireitaConteiner}>
                        <div className={styles.colunaDireita}>

                        <p>
                        O Shark Bank é um banco digital criado por um grupo de alunos da escola Imã Learning Place. A ideia surgiu durante uma aula de empreendedorismo, quando os estudantes foram desafiados a criar um negócio inovador que pudesse solucionar problemas do cotidiano. Com a crescente demanda por serviços bancários online e a dificuldade de acesso a esses serviços por parte de muitas pessoas, a equipe decidiu criar um banco digital que oferecesse praticidade e inclusão financeira.

                        </p>
                        <p>
                        Após meses de estudos, pesquisas e desenvolvimento, o Shark Bank foi lançado com sucesso. Com uma interface simples e intuitiva, o banco oferece serviços como abertura de conta, transferências, pagamento de contas e investimentos. Além disso, o Shark Bank busca promover a inclusão financeira, oferecendo serviços personalizados e acessíveis a todas as classes sociais. O sucesso do Shark Bank inspirou outros estudantes a empreender e acreditarem em suas ideias, mostrando que é possível transformar sonhos em realidade com muita dedicação e esforço.
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

                </div>
                {/* <div className={styles.metadeInferior}>
                    <h1>Nossos ideais são:</h1>
                </div> */}
            </div>


            <Footer />

        </>
    );
}
