import { useState } from "react";
import { useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { MenuTransacoes } from "../../components/MenuTransacoes";
import { Conteudo } from "../../components/Conteudo";
import { CampoInput } from "../../components/Inputs";
import { Botao } from "../../components/Botao";
import { Mascara } from "../../util/tipoMascara";
import { Comprovante } from "../../components/Comprovante";
import { Footer } from "../../components/Footer";
import { useLocation } from "react-router-dom";
import { definePrimeiroEUltimoNome } from "../../util/funcoesUtilitarias";
import moment from "moment";
import styles from "./index.module.css";

export function Transferencia() {
  const location = useLocation();
  const usuarioTransferido = location.state?.conteudo;

  const [usuario, setUsuario] = useState(usuarioTransferido);

  const [formTransferencia, setFormTransfererencia] = useState(false);
  const [comprovanteProps, setComprovanteProps] = useState({
    dataHora: "",
    valorEnviado: "",
    cpfOrigem: "",
    agenciaOrigem: "",
    contaOrigem: "",
    cpfDestino: "",
    agenciaDestino: "",
    contaDestino: "",
    mensagem: "",
    erro: true,
  });

  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    let valor = parseFloat(data.valor.replace(",", "."));
    console.log(valor);
    let numeroContaOrigem = usuario.conta.numero;
    let numeroContaDestino = data.conta;
    let tipo = "PIX";
    let mensagem = data.mensagem;

    const resposta = await fetch("https://localhost:7130/api/Transacoes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //credentials: 'include',
      body: JSON.stringify({
        valor,
        tipo,
        numeroContaOrigem,
        numeroContaDestino,
        mensagem,
      }),
    });
    const conteudoTransferencia = await resposta.json();
    atualizarUsuario();
    setComprovanteProps({
      dataHora: conteudoTransferencia.data.split("T")[0],
      valorEnviado: conteudoTransferencia.valor,
      cpfOrigem: usuario.cpf,
      agenciaOrigem: usuario.conta.agencia,
      contaOrigem: usuario.conta.numero,
      cpfDestino: conteudoTransferencia.usuarioDestino.cpf,
      agenciaDestino: conteudoTransferencia.usuarioDestino.conta.agencia,
      contaDestino: conteudoTransferencia.usuarioDestino.conta.numero,
      mensagem: conteudoTransferencia.mensagem,
      erro: false,
    });

    setFormTransfererencia(true);
    reset();
  };

  async function atualizarUsuario() {
    const resposta = await fetch(
      `https://localhost:7130/api/Usuarios/${usuario.id}`,
      {
        method: "GET",
      }
    );
    const conteudoTransferencia = await resposta.json();
    console.log(conteudoTransferencia);
    setUsuario(conteudoTransferencia);
  }
  return (
    <>
      <Header
        menu={<MenuTransacoes conteudo={usuario}></MenuTransacoes>}
        botoes={<Botao pagina={"/"} desabilitado={false} nome={"Sair"} />}
      />
      <Conteudo
        esconderTextosPainelEsquerdo={true}
        conteudoPainelEsquerdo={
          <div className={styles.infoConta}>
            <span className={styles.infoContaTitle}>
              Olá, {usuario.nome.split(" ")[0]}
            </span>
            <p id={styles["infoContaLabel"]}>Agência</p>
            <p id={styles["infoContaValue"]}>{usuario.conta.agencia}</p>
            <p id={styles["infoContaLabel"]}>Conta</p>
            <p id={styles["infoContaValue"]}>{usuario.conta.numero}</p>
            <p id={styles["infoContaLabel"]}>Saldo</p>
            <p id={styles["infoContaValue"]}>R$ {usuario.conta.saldo.toFixed(2).toString().replace(".", ",")}</p>
            <p id={styles["infoContaLabel"]}>Crédito aprovado</p>
            <p id={styles["infoContaValue"]}>R$ 900,00</p>
          </div>
        }
      >
        <div hidden={formTransferencia}>
          <form
            className={styles.formularioTransferencia}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.transferenciaContaDiv}>
              <div id={styles["input-agencia"]}>
                <CampoInput
                  nome={"agencia"}
                  placeholder={"Agencia"}
                  campoReferencia={"agencia"}
                  padrao={/^[0-9]*$/}
                  register={register}
                  errors={errors}
                  tamanhoMax={4}
                  tamanhoMin={4}
                  obrigatorio={true}
                />
              </div>

              <CampoInput
                nome={"conta"}
                placeholder={"Conta"}
                campoReferencia={"conta"}
                padrao={/^[0-9]*$/}
                register={register}
                errors={errors}
                tamanhoMax={9}
                tamanhoMin={9}
                obrigatorio={true}
              />
            </div>
            <CampoInput
              nome={"cpf"}
              placeholder={"CPF"}
              mascara={Mascara.CPF}
              campoReferencia={"cpf"}
              padrao={/^[0-9]|-|.*$/}
              register={register}
              errors={errors}
              tamanhoMax={14}
              tamanhoMin={14}
              obrigatorio={true}
            />

            <CampoInput
              placeholder={"Valor"}
              campoReferencia={"valor"}
              mascara={Mascara.ValorMonetario}
              obrigatorio={true}
              tamanhoMax={14}
              padrao={/^[0-9]|,|.*$/}
              register={register}
              errors={errors}
            />

            <textarea
              placeholder={"Mensagem (opcional)"}
              rows={4}
              maxLength={100}
              id="transferencia-mensagem"
              {...register("mensagem")}
            />

            <CampoInput
              tipo={"password"}
              placeholder={"Senha"}
              campoReferencia={"senha"}
              tamanhoMax={6}
              tamanhoMin={6}
              padrao={/^[0-9]*$/}
              obrigatorio={true}
              register={register}
              errors={errors}
            />

            <Botao tipo={"submit"} nome={"Enviar"} />
          </form>
        </div>

        <div hidden={!formTransferencia}>
          <div className={styles.transferenciaComprovante}>
            <Comprovante
              dataHora={comprovanteProps.dataHora}
              valorEnviado={comprovanteProps.valorEnviado}
              cpfOrigem={comprovanteProps.cpfOrigem}
              agenciaOrigem={comprovanteProps.agenciaOrigem}
              contaOrigem={comprovanteProps.contaOrigem}
              cpfDestino={comprovanteProps.cpfDestino}
              agenciaDestino={comprovanteProps.agenciaDestino}
              contaDestino={comprovanteProps.contaDestino}
              mensagem={comprovanteProps.mensagem}
              erro={comprovanteProps.erro}
            />
            <div className={styles.botoesComprovante}>
              <Botao
                funcaoDoBotao={() => {
                  setFormTransfererencia(false);
                }}
                pagina={"/transferir"}
                nome={"Nova Transferência"}
              ></Botao>

              <Botao
                funcaoDoBotao={() => {
                  setFormTransfererencia(false);
                }}
                pagina={"/transferir"}
                nome={"Compartilhar"}
              ></Botao>
            </div>
          </div>
        </div>
      </Conteudo>
      <Footer></Footer>
    </>
  );
}
