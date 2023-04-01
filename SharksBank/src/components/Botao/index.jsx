import React from "react";

import styles from "./index.module.css";

export function Botao({ funcaoDoBotao, nome, desabilitado }) {
  return (
    <div className={styles.botao}>
      <button onClick={funcaoDoBotao} disabled={desabilitado}>
        {nome}
      </button>
    </div>
  );
}
