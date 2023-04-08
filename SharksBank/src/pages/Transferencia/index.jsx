import { useForm } from 'react-hook-form';

import { Conteudo } from '../../components/Conteudo';
import { CampoInput } from '../../components/Inputs';
import { Botao } from '../../components/Botao';

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
			conteudoPainelEsquerdo={
				<div className={styles.infoConta}>Suave</div>
			}
		>
			<form
				className={styles.formularioTransferencia}
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className={styles.transferenciaContaDiv}>
					<div className={styles.inputAgencia}>
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
					campoReferencia={'cpf'}
					padrao={/^[0-9]*$/}
					register={register}
					errors={errors}
					tamanhoMax={11}
					tamanhoMin={11}
					desabilitar={watch('conta') || watch('agencia')}
					obrigatorio={!(watch('conta') || watch('agencia'))}
				/>

				<CampoInput
					placeholder={'Valor'}
					campoReferencia={'valor'}
					obrigatorio={true}
					padrao={/^[0-9]*$/}
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
