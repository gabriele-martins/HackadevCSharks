import React from "react";

import styles from "./index.module.css";
import githubIcon from "../../assets/github-svgrepo-com-ciano.svg";

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <a href={"https://github.com/gabriele-martins/HackadevCSharks"} target='_blank'>
         <img className={styles.icone} src={githubIcon} alt={`Icone Github Projeto Sharksbank`} />
         <p>© 2023 CSharks</p> 
      </a>
    </div>
  );
}
