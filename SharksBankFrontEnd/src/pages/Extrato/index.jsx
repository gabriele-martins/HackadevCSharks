import React from "react";

import styles from "./style.module.css";
import { Header } from "../../components/Header";
import { MenuTransacoes } from "../../components/MenuTransacoes";
import { Botao } from "../../components/Botao";
import { useLocation } from "react-router-dom";
import { definePrimeiroEUltimoNome } from "../../util/funcoesUtilitarias";
import { Footer } from "../../components/Footer";
import Transacao from "./../../components/Transacao/Transacao";
import { TabelaTransacoes } from "../../components/TabelaTransacoes";

export function Extrato() {
  const location = useLocation();
  const usuario = location.state.conteudo;
  return (
    <>
      <Header
        menu={<MenuTransacoes conteudo={usuario}></MenuTransacoes>}
        botoes={<Botao pagina={"/"} desabilitado={false} nome={"Sair"} />}
      />

      <div className={styles.conteudoSaldo}>
        <div className={styles.painelSuperior}>
          <div className={styles.painelSuperiorColuna}>
            <div className={styles.painelSuperiorTexto}>
              Titular: {definePrimeiroEUltimoNome(usuario.nome)}
            </div>
            <button className={styles.botaoExportar}>Exportar Extrato</button>
          </div>
          <div className={styles.painelSuperiorColuna}>
            <div className={styles.painelSuperiorColunaTeste}>
              <div className={styles.painelSuperiorLinha}>
                Agência: {usuario.conta.agencia}
              </div>
              <div className={styles.painelSuperiorLinha}>
                Conta: {usuario.conta.numero}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.painelInferior}>
          <TabelaTransacoes />
        </div>
      </div>
      <Footer />
    </>
  );
}
