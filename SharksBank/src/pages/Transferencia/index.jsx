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

import moment from "moment";
import styles from "./index.module.css";

export function Transferencia() {
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

  const onSubmit = (data) => {
    setComprovanteProps({
      dataHora: moment().format("DD/MM/YYYY HH:mm:ss"),
      valorEnviado: data.valor,
      cpfOrigem: "999.999.999-99",
      agenciaOrigem: "3002",
      contaOrigem: "01493238-7",
      cpfDestino: data.cpf,
      agenciaDestino: data.agencia,
      contaDestino: data.conta,
      mensagem: data.mensagem,
      erro: false,
    });

    setFormTransfererencia(true);
    reset();
  };

  return (
    <>
      <Header
        menu={<MenuTransacoes></MenuTransacoes>}
        botoes={<Botao pagina={"/"} desabilitado={false} nome={"Sair"} />}
      />
      <Conteudo
        esconderTextosPainelEsquerdo={true}
        conteudoPainelEsquerdo={
          <div className={styles.infoConta}>
            <span className={styles.infoContaTitle}>Olá, Tubarão</span>
            <p id={styles["infoContaLabel"]}>Agência</p>
            <p id={styles["infoContaValue"]}>3002</p>
            <p id={styles["infoContaLabel"]}>Conta</p>
            <p id={styles["infoContaValue"]}>01493238-7</p>
            <p id={styles["infoContaLabel"]}>Saldo</p>
            <p id={styles["infoContaValue"]}>R$ 1.000,00</p>
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
                  desabilitar={watch("cpf")}
                  obrigatorio={!watch("cpf")}
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
                // desabilitar={watch("cpf")}
                // obrigatorio={!watch("cpf")}
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
              // desabilitar={watch("conta") || watch("agencia")}
              // obrigatorio={!(watch("conta") || watch("agencia"))}
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
              tamanhoMax={4}
              tamanhoMin={4}
              padrao={/^[0-9]*$/}
              obrigatorio={true}
              register={register}
              errors={errors}
            />

            <Botao type="submit" nome={"Enviar"} />
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
