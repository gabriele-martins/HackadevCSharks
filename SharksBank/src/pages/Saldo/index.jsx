import React from "react";
import { Header } from "../../components/Header";
import { MenuTransacoes } from "../../components/MenuTransacoes";
import { Botao } from "../../components/Botao";
import { Footer } from "../../components/Footer";

import styles from "./style.module.css";

export function Saldo() {
  return (
    <>
      <Header
        menu={<MenuTransacoes></MenuTransacoes>}
        botoes={
          <div className={styles.botoesHeader}>
            <Botao pagina={"/"} desabilitado={false} nome={"Sair"} />
          </div>
        }
      />

      <div className={styles.conteudoSaldo}>
        <div className={styles.colunaEsquerda}>
          <div className={styles.colunaEsquerdaTitulo}>
            <h2>Olá, Tubarão</h2>
          </div>
          <div className={styles.colunaEsquerdaTexto}>
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
        <div className={styles.colunaDireita}>
          <div className={styles.colunaDireitaTitulos}>
            <h2>Seu saldo é</h2>
          </div>
          <div className={styles.colunaDireitaValores}>
            <h2>R$ 1.000,00</h2>
          </div>
          <div className={styles.colunaDireitaTitulos}>
            <p>Saldo Disponível</p>
          </div>
          <div className={styles.colunaDireitaValores}>
            <p>R$ 2.000,00</p>
          </div>
          <div className={styles.colunaDireitaTitulos}>
            <p>Juros Aplicados</p>
          </div>
          <div className={styles.colunaDireitaValores}>
            <p>8% a.m.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
