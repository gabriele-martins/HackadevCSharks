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
                <h1 className={styles.tituloPreto}>Nossa <span className={styles.tituloazul}>História</span></h1>
            </div>
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
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
