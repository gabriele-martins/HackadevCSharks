import React from "react";

import styles from "./style.module.css";
import { Header } from "../../components/Header";
import { MenuTransacoes } from "../../components/MenuTransacoes";
import { Botao } from "../../components/Botao";

import { Footer } from "../../components/Footer";
import Transacao from "./../../components/Transacao/Transacao";

export default function Extrato() {
    return (
        <>
            <Header
                menu={<MenuTransacoes></MenuTransacoes>}
                botoes={
                    <div className={styles.botoesHeader}>
                        <Botao desabilitado={false} nome={"Sair"} />
                    </div>
                }
            />

            <div className={styles.conteudoSaldo}>
                <div className={styles.colunaDireita}>
                    <div className={styles.colunaDireitaTitulo}>
                        <h1>Olá, Tubarão</h1>
                    </div>
                    <div className={styles.colunaDireitaTexto}>
                        <div className={styles.subtitulos}>
                            <p>Agência</p>
                        </div>
                        <div className={styles.conteudoSubtitulos}>
                            <p>3002</p>
                        </div>
                        <div className={styles.subtitulos}>
                            <p>Conta</p>
                        </div>
                        <div className={styles.conteudoSubtitulos}>
                            <p>01493238-7</p>
                        </div>
                        <div className={styles.subtitulos}>
                            <p>Última Transação</p>
                        </div>
                        <div className={styles.conteudoSubtitulos}>
                            <p>04/04 13:00 R$ 50,00</p>
                        </div>
                    </div>
                </div>
                <div className={styles.colunaEsquerda}>
                    <div className={styles.mes}>Abril</div>
                    <Transacao />
                    <Transacao />
                    <div className={styles.mes}>Março</div>
                    <Transacao />
                    <Transacao />
                </div>
            </div>
            <Footer />
        </>
    );
}
