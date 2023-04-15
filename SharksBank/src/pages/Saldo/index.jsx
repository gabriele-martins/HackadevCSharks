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
          <div className={styles.painelNomes}>
            <h1>Olá, Tubarão</h1> <div>Ultimo Acesso: 15/04/2023</div>
          </div>
          <div className={styles.painelSuperior}>
              <div className={styles.dadosConta}>
                <div className={styles.painelSuperiorlinha}>
                  <div className={styles.coluna}>Agencia: </div>
                  <div className={styles.coluna}>0001</div>
                </div>
                <div className={styles.painelSuperiorlinha}>
                  <div className={styles.coluna}>Conta: </div>
                  <div className={styles.coluna}>000001-1</div>
                </div>
              </div>
              <div className={styles.dadosConta}>
                <div className={styles.painelSuperiorlinha}>
                  <div className={styles.coluna}>Saldo: </div>
                  <div className={styles.coluna}>R$ 100</div>
                </div>
                <div className={styles.painelSuperiorlinha}>
                  <div className={styles.coluna}>Juros: </div>
                  <div className={styles.coluna}>2% a.m</div>
                </div>
              </div>
              <div className={styles.dadosConta}>
                <div className={styles.painelSuperiorlinha}>
                  <div className={styles.coluna}>Crédito:</div>
                  <div className={styles.coluna}>R$ 10</div>
                </div>
                <div className={styles.painelSuperiorlinha}>
                  <div className={styles.coluna}>Fatura:</div>
                  <div className={styles.coluna}>R$ 2</div>
                </div>
              </div>


          </div>
          <div className={styles.painelInferior}>GRAFICO DE VALORES TOTAIS DE GASTOS MENSAIS</div>
      </div>

      <Footer />
    </>
  );
}
