import React from "react";
import styles from "./index.module.css";

export function TabelaTransacoes({ transacoes }) {
  function formataData(valor) {
    const dataSemMilesimo = valor.split(".")[0];
    const dataEHora = dataSemMilesimo.split("T");
    const data = dataEHora[0].split("-");
    return `${data[2]}/${data[1]}/${data[0]} ${dataEHora[1]}`;
  }
  return (
    <div className={styles.tabelaTransacoes}>
      <table className={styles.tabela}>
        <thead>
          <tr>
            <th>Data</th>
            <th>Lançamento</th>
            <th>Detalhes</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {transacoes.map((transacao, index) => (
            <tr
              key={index}
              className={
                transacao.isEnviada
                  ? styles.transacaoNegativa
                  : styles.transacaoPositiva
              }
            >
              <td className={styles.data}>{formataData(transacao.data)}</td>
              <td>{transacao.tipo.split("RECEBIDA")}</td>
              <td>{transacao.isEnviada ? "ENVIADO" : "RECEBIDO"}</td>
              <td className={styles.valor}>
                R$ {transacao.valor.toFixed(2).toString().replace(".", ",")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
