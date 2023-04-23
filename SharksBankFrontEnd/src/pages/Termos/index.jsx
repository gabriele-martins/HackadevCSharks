import React, { useState } from "react";
import { Conteudo } from "../../components/Conteudo";
import { Botao } from "../../components/Botao";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";

import styles from "./index.module.css";

export function Termos() {
  const [termosLido, setTermosLido] = useState(false);
  const [termoAceito, setTermoAceito] = useState(false);

  function handleScroll(evento) {
    let alturaTotalCaixaTexto = evento.target.scrollHeight; //Altura total do scroll da caixa de texto
    let posicaoAtual = evento.target.scrollTop; // Posição atual do scroll
    let compensacao = evento.target.offsetHeight + 100; //
  /*   console.log("Altura Caixa: " + alturaTotalCaixaTexto);
    console.log("Posição Atual: " + posicaoAtual);
    console.log("Conpensação: " + compensacao); */
    
    if (posicaoAtual >= alturaTotalCaixaTexto - compensacao) {
      setTermosLido(true);
    }
  }

  function handleClickCheckboxAceitarTermos() {
    setTermoAceito(!termoAceito);
  }

  return (
    <>
      <Header
        menu={<Menu></Menu>}
        botoes={
          <Botao pagina={"/login"} desabilitado={false} nome={"Acessar"} />
        }
      />
      <Conteudo
        titulo={"Sharks Bank"}
        subTitulo={"Quero ser Shark!"}
        descricao={
          "Antes de se juntar ao cardume, precisamos que você leia e aceite os termos de serviço"
        }
      >
        <div id={styles["container-termos"]}>
          <div id={styles["div-texto-termos"]} onScroll={handleScroll}>
            <h3>Termos de Serviço Sharks Bank</h3>
            <br />
            <p>
              Bem-vindo ao Sharks Bank! Agradecemos por escolher nossos serviços
              financeiros. Ao utilizar nossos serviços, você concorda com os
              termos e condições descritos abaixo:
              <br />
              <br />
              <strong>Definições</strong> <br />
              <br />
              1.1. "Sharks Bank", "nós", "nosso" se refere à fintech Sharks Bank
              e todas as suas empresas subsidiárias. <br />
              1.2. "Usuário", "você", "seu" se refere a qualquer pessoa física
              ou jurídica que utilize os serviços do Sharks Bank.
              <br />
              1.3. "Conta" se refere à conta do usuário no Sharks Bank, que é
              criada após a conclusão do processo de registro.
              <br />
              1.4. "Serviços" se refere a todos os serviços financeiros
              oferecidos pelo Sharks Bank.
              <br />
              <br />
              <strong>Elegibilidade</strong> <br />
              <br />
              2.1. Para utilizar os serviços do Sharks Bank, o usuário deve ter
              pelo menos 18 anos de idade e possuir capacidade legal para
              celebrar contratos.
              <br />
              2.2. O usuário deve fornecer informações precisas e atualizadas
              durante o processo de registro e concorda em mantê-las
              atualizadas.
              <br />
              <br />
              <strong>Criação da Conta</strong>
              <br />
              <br />
              3.1. O usuário deve completar o processo de registro do Sharks
              Bank para criar uma conta.
              <br />
              3.2. Ao criar uma conta, o usuário concorda em fornecer
              informações precisas e atualizadas.
              <br />
              3.3. O usuário é responsável por manter a segurança de suas
              credenciais de login.
              <br />
              3.4. O Sharks Bank reserva o direito de recusar ou cancelar uma
              conta a qualquer momento, por qualquer motivo.
              <br />
              <br />
              <strong>Uso dos Serviços</strong>
              <br />
              <br />
              4.1. O usuário concorda em utilizar os serviços do Sharks Bank de
              forma legal e ética.
              <br />
              4.2. O usuário concorda em não utilizar os serviços do Sharks Bank
              para atividades ilegais ou fraudulentas.
              <br />
              4.3. O Sharks Bank reserva o direito de encerrar a conta do
              usuário a qualquer momento, se considerar que o usuário está
              utilizando os serviços de forma ilegal ou fraudulenta.
              <br />
              <br />
              <strong>Taxas</strong>
              <br />
              <br />
              5.1. O usuário concorda em pagar as taxas associadas aos serviços
              do Sharks Bank.
              <br />
              5.2. O Sharks Bank reserva o direito de alterar as taxas a
              qualquer momento, mediante aviso prévio ao usuário.
              <br />
              <br />
              <strong>Privacidade</strong>
              <br />
              <br />
              6.1. O Sharks Bank coleta e utiliza informações pessoais dos
              usuários de acordo com a nossa política de privacidade.
              <br />
              6.2. O usuário concorda em compartilhar informações pessoais com o
              Sharks Bank para utilização dos serviços.
              <br />
              6.3. O Sharks Bank não compartilha informações pessoais dos
              usuários com terceiros sem consentimento prévio do usuário.
              <br />
              <br />
              <strong>Limitação de Responsabilidade</strong>
              <br />
              <br />
              7.1. O Sharks Bank não se responsabiliza por quaisquer danos
              diretos ou indiretos causados ao usuário pelo uso dos serviços do
              Sharks Bank.
              <br />
              7.2. O Sharks Bank não se responsabiliza por quaisquer danos
              causados ao usuário por terceiros.
              <br />
              7.3. O Sharks Bank não se responsabiliza por quaisquer perdas
              financeiras decorrentes de atividades ilegais ou fraudulentas.
              <br />
              <br />
              <strong>Disposições Gerais</strong>
              <br />
              <br />
              8.1. Estes termos e condições representam o acordo integral entre
              o usuário e o Sharks Bank em relação aos serviços.
              <br />
              8.2. Estes termos e condições são regidos pelas leis do Brasil.
              <br />
              8.3. O usuário concorda em resolver qualquer disputa relacionada
              aos serviços do Sharks Bank por meio de arbitragem, em
              conformidade com as regras de arbitragem da Câmara de Comércio
              Internacional (CCI).
              <br />
              8.4. O usuário concorda em isentar o Sharks Bank, seus diretores,
              funcionários, afiliados e agentes de qualquer responsabilidade por
              quaisquer reivindicações, ações, perdas ou danos decorrentes do
              uso dos serviços do Sharks Bank.
              <br />
              8.5. O Sharks Bank reserva o direito de alterar estes termos e
              condições a qualquer momento, mediante aviso prévio ao usuário.
              <br />
              8.6. Se qualquer disposição destes termos e condições for
              considerada inválida ou inexequível, as disposições restantes
              permanecerão em pleno vigor e efeito.
              <br />
              8.7. Qualquer renúncia a qualquer disposição destes termos e
              condições só terá efeito se for feita por escrito e assinada pelo
              Sharks Bank.
              <br />
              8.8. Estes termos e condições são vinculativos e se aplicam a
              todos os usuários dos serviços do Sharks Bank, seus sucessores e
              cessionários permitidos.
              <br />
              <br />
              <strong>Comunicações</strong> <br />
              <br />
              9.1. O usuário concorda em receber comunicações do Sharks Bank por
              e-mail, SMS, notificações push ou qualquer outro meio de
              comunicação que o Sharks Bank considere adequado. <br />
              9.2. O Sharks Bank reserva o direito de enviar comunicações
              promocionais ao usuário, desde que o usuário tenha dado seu
              consentimento prévio. <br />
              <br />
              <strong>Encerramento da Conta</strong> <br />
              <br />
              10.1. O usuário pode encerrar sua conta a qualquer momento,
              mediante aviso prévio ao Sharks Bank. <br />
              10.2. O Sharks Bank reserva o direito de encerrar a conta do
              usuário a qualquer momento, por qualquer motivo, mediante aviso
              prévio ao usuário. <br />
              10.3. O encerramento da conta não exime o usuário de quaisquer
              obrigações pendentes em relação aos serviços do Sharks Bank.{" "}
              <br />
              <br />
              <strong>Lei Aplicável e Jurisdição</strong> <br />
              <br />
              11.1. Estes termos e condições são regidos pelas leis do Brasil.
              <br />
              11.2. Qualquer disputa decorrente destes termos e condições será
              resolvida por meio de arbitragem, em conformidade com as regras de
              arbitragem da Câmara de Comércio Internacional (CCI), sediada em
              São Paulo, Brasil. <br />
              11.3. As partes concordam em submeter-se à jurisdição exclusiva
              dos tribunais de São Paulo, Brasil, para qualquer disputa que não
              possa ser resolvida por meio de arbitragem. <br />
              <br />
              Ao utilizar os serviços do Sharks Bank, o usuário reconhece ter
              lido e concordado com estes termos e condições. Se o usuário não
              concordar com estes termos e condições, ele não deve utilizar os
              serviços do Sharks Bank. <br />
            </p>
          </div>
          <div id={styles["div-checkbox-termos"]}>
            <label id={styles["label-checkbox-termos"]}>
              Estou ciente e aceito os termos de serviço.
              <input
                type="checkbox"
                id={styles["checkbox-termos"]}
                disabled={!termosLido}
                onClick={handleClickCheckboxAceitarTermos}
              />
              <span id={styles["span-checkbox-termos"]}></span>
            </label>
          </div>
          <div className={styles.conteudoBotoes}>
            <Botao pagina={"/"} nome={"Cancelar"} desabilitado={false} />
            <Botao
              pagina={"/cadastro"}
              nome={"Aceito"}
              desabilitado={!termoAceito}
            />
          </div>
        </div>
      </Conteudo>
      <Footer />
    </>
  );
}
