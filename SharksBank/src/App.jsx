import React from "react";
import { Botao } from "./components/Botao";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Conteudo } from "./components/Conteudo";
import { Footer } from "./components/Footer";

import "./App.css";

export function App() {
  return (
    <div className="app">
      <Header
        menu={<Menu></Menu>}
        botoes={
          <div className="teste">
            <Botao desabilitado={false} nome={"Abra sua conta"} />
            <Botao desabilitado={false} nome={"Acessar"} />
          </div>
        }
      />
      <Conteudo
        titulo={"Home"}
        subTitulo={"Testando"}
        descricao={"Testando mais ainda"}
      ></Conteudo>
      <Footer />
    </div>
  );
}
