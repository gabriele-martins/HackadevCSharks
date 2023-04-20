import React from "react";
import { Header } from "../../components/Header";
import { MenuTransacoes } from "../../components/MenuTransacoes";
import { Botao } from "../../components/Botao";
import { Footer } from "../../components/Footer";

import { Bank, AddressBook, CurrencyDollar, Coins, CreditCard, Receipt } from "phosphor-react";
import { Grafico } from "../../components/Grafico";

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
        <div className={styles.painelNomes}>
          <h1>Olá, Tubarão</h1> 
        </div>
        <div className={styles.painelSuperior}>
          <div className={styles.blocoConteudo}>
            <div className={styles.blocoConteudoLinha}>
              <div className={styles.blocoConteudoLinhaIcone}><Bank size={32} color="#00efc5" /></div>
              <div className={styles.blocoConteudoLinhaItem}>Agencia:&nbsp;</div>
              <div className={styles.blocoConteudoLinhaValue}>0001</div>
            </div>
            <div className={styles.blocoConteudoLinha}>
              <div className={styles.blocoConteudoLinhaIcone}><AddressBook size={32} color="#00efc5" /></div>
              <div className={styles.blocoConteudoLinhaItem}>Conta:&nbsp;</div>
              <div className={styles.blocoConteudoLinhaValue}>000001-1</div>
            </div>
          </div>

          <div className={styles.blocoConteudo}>
            <div className={styles.blocoConteudoLinha}>
              <div className={styles.blocoConteudoLinhaIcone}><CurrencyDollar size={32} color="#00efc5" /></div>
              <div className={styles.blocoConteudoLinhaItem}>Saldo:&nbsp;</div>
              <div className={styles.blocoConteudoLinhaValue}>R$ 100,00</div>
            </div>
            <div className={styles.blocoConteudoLinha}>
              <div className={styles.blocoConteudoLinhaIcone}><Receipt size={32} color="#00efc5" /></div>
              <div className={styles.blocoConteudoLinhaItem}>Última transação:&nbsp;</div>
              <div className={styles.blocoConteudoLinhaValue}>R$ 20,00</div>
            </div>
          </div>
          <div className={styles.blocoConteudo}>
            <div className={styles.blocoConteudoLinha}>
              <div className={styles.blocoConteudoLinhaIcone}><CreditCard size={32} color="#00efc5" /></div>
              <div className={styles.blocoConteudoLinhaItem}>Crédito aprovado:&nbsp;</div>
              <div className={styles.blocoConteudoLinhaValue}>R$ 900,00</div>
            </div>
            <div className={styles.blocoConteudoLinha}>
              <div className={styles.blocoConteudoLinhaIcone}><Coins size={32} color="#00efc5" /></div>
              <div className={styles.blocoConteudoLinhaItem}>Juros:&nbsp;</div>
              <div className={styles.blocoConteudoLinhaValue}>2% a.m.</div>
            </div>
          </div>


        </div>
        <div className={styles.painelInferior}><Grafico /></div>
      </div>

      <Footer />
    </>
  );
}
