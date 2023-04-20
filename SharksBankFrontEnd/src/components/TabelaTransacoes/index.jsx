import React from "react";
import styles from "./index.module.css";

const transacoes = [
    {
      tipo: 'Saque',
      data: new Date(2023, 2, 1),
      detalhes: 'Retirada no caixa eletrônico',
      valor: -100.0
    },
    {
      tipo: 'Transferência',
      data: new Date(2023, 2, 2),
      detalhes: 'Transferência para conta corrente',
      valor: -500
    },
    {
      tipo: 'Depósito',
      data: new Date(2023, 2, 3),
      detalhes: 'Depósito em dinheiro',
      valor: 300.0
    },
    {
      tipo: 'Saque',
      data: new Date(2023, 2, 4),
      detalhes: 'Retirada no caixa eletrônico',
      valor: -50.0
    },
    {
      tipo: 'Transferência',
      data: new Date(2023, 2, 7),
      detalhes: 'Transferência para conta poupança',
      valor: -200.0
    },
    {
      tipo: 'Depósito',
      data: new Date(2023, 2, 10),
      detalhes: 'Depósito em cheque',
      valor: 500.0
    },
    {
      tipo: 'Saque',
      data: new Date(2023, 2, 15),
      detalhes: 'Retirada no caixa eletrônico',
      valor: -150.0
    },
    {
      tipo: 'Transferência',
      data: new Date(2023, 2, 18),
      detalhes: 'Transferência para outra agência',
      valor: -1000.0
    },
    {
      tipo: 'Depósito',
      data: new Date(2023, 2, 21),
      detalhes: 'Depósito em dinheiro',
      valor: 200.0
    },
    {
      tipo: 'Saque',
      data: new Date(2023, 2, 28),
      detalhes: 'Retirada no caixa eletrônico',
      valor: -75.0
    }
  ];
  

export function TabelaTransacoes(){
    return(
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
                        <tr key={index} className={transacao.valor < 0 ? 
                                          styles.transacaoNegativa : styles.transacaoPositiva}>
                            <td className={styles.data}>{transacao.data.toLocaleDateString()}</td>
                            <td>{transacao.tipo}</td>
                            <td>{transacao.detalhes}</td>
                            <td className={styles.valor}>R$: {parseFloat(transacao.valor).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>

        </table>
        </div>
    )
}