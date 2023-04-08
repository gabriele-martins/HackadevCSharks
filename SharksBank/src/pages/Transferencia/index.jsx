import { useForm } from 'react-hook-form';
import { Conteudo } from '../../components/Conteudo';
import { CampoInput } from '../../components/Inputs';
import { Botao } from '../../components/Botao';
import { Mascara } from '../../util/tipoMascara';

import styles from './index.module.css';

export function Transferencia() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ mode: 'onChange' });

	const onSubmit = (data) => console.log(data);

	return (
		<Conteudo
			esconderTextosPainelEsquerdo={true}
			conteudoPainelEsquerdo={
				<div className={styles.infoConta}>
					<span className={styles.infoContaTitle}>Olá, Tubarão</span>
					<p className={styles.infoContaLabel}>Agência</p>
					<p className={styles.infoContaValue}>3002</p>
					<p className={styles.infoContaLabel}>Conta</p>
					<p className={styles.infoContaValue}>01493238-7</p>
					<p className={styles.infoContaLabel}>Saldo Disponível</p>
					<p className={styles.infoContaValue}>R$ 2.000,00</p>
					<p className={styles.infoContaLabel}>Saldo</p>
					<p className={styles.infoContaValue}>R$ 1.000,00</p>
				</div>
			}
		>
			<form
				className={styles.formularioTransferencia}
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className={styles.transferenciaContaDiv}>
					<div id={styles['input-agencia']}>
						<CampoInput
							nome={'agencia'}
							placeholder={'Agencia'}
							campoReferencia={'agencia'}
							padrao={/^[0-9]*$/}
							register={register}
							errors={errors}
							tamanhoMax={4}
							tamanhoMin={4}
							desabilitar={watch('cpf')}
							obrigatorio={!watch('cpf')}
						/>
					</div>

					<CampoInput
						nome={'conta'}
						placeholder={'Conta'}
						campoReferencia={'conta'}
						padrao={/^[0-9]*$/}
						register={register}
						errors={errors}
						tamanhoMax={9}
						tamanhoMin={9}
						desabilitar={watch('cpf')}
						obrigatorio={!watch('cpf')}
					/>
				</div>
				<CampoInput
					nome={'cpf'}
					placeholder={'CPF'}
					mascara={Mascara.CPF}
					campoReferencia={'cpf'}
					padrao={/^[0-9]|-|.*$/}
					register={register}
					errors={errors}
					tamanhoMax={14}
					tamanhoMin={14}
					desabilitar={watch('conta') || watch('agencia')}
					obrigatorio={!(watch('conta') || watch('agencia'))}
				/>

				<CampoInput
					placeholder={'Valor'}
					campoReferencia={'valor'}
					mascara={Mascara.ValorMonetario}
					obrigatorio={true}
					tamanhoMax={14}
					padrao={/^[0-9]|,|.*$/}
					register={register}
					errors={errors}
				/>

				<textarea
					placeholder={'Mensagem (opcional)'}
					rows={4}
					maxLength={100}
					id="transferencia-mensagem"
					{...register('mensagem')}
				/>

				<CampoInput
					tipo={'password'}
					placeholder={'Senha'}
					campoReferencia={'senha'}
					tamanhoMax={4}
					tamanhoMin={4}
					padrao={/^[0-9]*$/}
					obrigatorio={true}
					register={register}
					errors={errors}
				/>

				<Botao type="submit" nome={'Enviar'} />
			</form>
		</Conteudo>
	);
}
