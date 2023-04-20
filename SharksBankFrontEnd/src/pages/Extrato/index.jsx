import React from "react";

import styles from "./style.module.css";
import { Header } from "../../components/Header";
import { MenuTransacoes } from "../../components/MenuTransacoes";
import { Botao } from "../../components/Botao";

import { Footer } from "../../components/Footer";
import Transacao from "./../../components/Transacao/Transacao";
import { TabelaTransacoes } from "../../components/TabelaTransacoes";

export function Extrato() {
  return (
    <>
      <Header
        menu={<MenuTransacoes></MenuTransacoes>}
        botoes={<Botao pagina={"/"} desabilitado={false} nome={"Sair"} />}
      />

      <div className={styles.conteudoSaldo}>
      <div className={styles.painelSuperior}>
        <div className={styles.painelSuperiorColuna}>
          <div className={styles.painelSuperiorTexto}>Titular: Tubarão</div>
          <button className={styles.botaoExportar}>Exportar Extrato</button>
        </div>
        <div className={styles.painelSuperiorColuna}>
          <div className={styles.painelSuperiorColunaTeste}>
            <div className={styles.painelSuperiorLinha}>Agência: 0312-2</div>
            <div className={styles.painelSuperiorLinha}>Conta: 00000001-1</div>
          </div>
        </div>
      </div>
      <div className={styles.painelInferior}>
              <TabelaTransacoes/>
      </div>
      </div>
      <Footer />
    </>
  );
}
