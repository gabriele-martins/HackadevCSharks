import React from "react";
import {NavLink} from "react-router-dom";

import styles from "./index.module.css";



export function Menu() {
  
  return (
       <section className={styles.menu}>
       <nav className={styles.nav}>
         <NavLink to={"/sharksbank"} exact activeClassName="ativa">Sharks Bank</NavLink>
         <NavLink to={"/contas"}  activeClassName="ativa">Contas</NavLink>
         <a href="https://blog.imatech.io/" target="_blank">Blog</a>
         <NavLink to={"/sobre"} exact activeClassName="ativa">Sobre</NavLink>
         <NavLink to={"/ajuda"} exact activeClassName="ativa">Ajuda</NavLink>
       </nav>
     </section>
  );
}
