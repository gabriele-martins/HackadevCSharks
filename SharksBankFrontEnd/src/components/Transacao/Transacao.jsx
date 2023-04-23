import React from "react";
import style from "./transacao.module.css";


export default function Transacao(data) {
    return (
        <div className={style.transacaoContainer}>
            <div className={style.controlDados}>
                <h5>Transferência enviada</h5>
                <h5>Pix</h5>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>01 ABR</td>
                        <td className={style.direita}>13H</td>
                    </tr>
                    <tr>
                        <td>Lanche Tubarão</td>
                        <td className={style.direita}>R$ 20,00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
