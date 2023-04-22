import React from "react";

import styles from "./index.module.css";



export function Menu() {
  
  return (
    
       <section className={styles.menu}>
       <nav className={styles.nav}>
         <a href="/sharksbank">Sharks Bank</a>
         <a href="/contas">Contas</a>
         <a href="https://blog.imatech.io/" target="_blank">Blog</a>
         <a href="/sobre">Sobre</a>
         <a href="/ajuda">Ajuda</a>
       </nav>
     </section>
     
  );
}
