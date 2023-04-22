import React from "react";
import {Link} from "react-router-dom";

import styles from "./index.module.css";



export function Menu() {
  
  return (
    
       <section className={styles.menu}>
       <nav className={styles.nav}>
         <Link to={"/sharksbank"}>Sharks Bank</Link>
         <Link to={"/contas"}>Contas</Link>
         <a href="https://blog.imatech.io/" target="_blank">Blog</a>
         <Link to={"/sobre"}>Sobre</Link>
         <Link to={"/ajuda"}>Ajuda</Link>
       </nav>
     </section>
     
  );
}
