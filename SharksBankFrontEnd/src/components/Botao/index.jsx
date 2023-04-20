import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";

export function Botao({ pagina, funcaoDoBotao, nome, desabilitado }) {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate(pagina);
  }

  function handleClick() {
    handleOnClick();
    if (funcaoDoBotao !== undefined) {
      funcaoDoBotao();
    }
  }

  return (
    <div className={styles.botao}>
      <button onClick={handleClick} disabled={desabilitado}>
        {nome}
      </button>
    </div>
  );
}
