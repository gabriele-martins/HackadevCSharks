import React, { useEffect } from 'react';
import styles from './index.module.css';
const ListaAjuda = (props) => {
    const perguntas = [{
        id: 0,
        pergunta: 'Quais são os requisitos para abrir uma conta?',
        resposta: "Para abrir uma conta em nosso banco digital, você precisa ser maior de 18 anos ou emancipado legalmente, possuir um CPF válido e regularizado na Receita Federal, ter um smartphone compatível com nosso aplicativo, possuir um endereço de e-mail válido e acesso à internet, não ter restrições em órgãos de proteção ao crédito. Além disso, durante o processo de abertura de conta, você precisará fornecer algumas informações pessoais, como nome completo, data de nascimento, endereço, número de celular e renda mensal. Também será necessário enviar uma foto sua e de um documento de identificação válido, como RG ou CNH. Após a verificação dessas informações, sua conta será criada e você poderá começar a usar nossos serviços bancários digitais."
    },
    {
        id: 1,
        pergunta: 'Quais serviços bancários estão disponíveis?',
        resposta: 'Oferecemos uma ampla gama de serviços bancários digitais, incluindo conta corrente, cartões de crédito e débito, investimentos em fundos, ações e títulos, empréstimos pessoais e empresariais, seguros de vida, automóvel e residencial, saques em caixas eletrônicos, atendimento ao cliente 24/7 e ferramentas de gestão financeira. Estamos sempre buscando expandir nossa oferta para atender às necessidades em constante evolução de nossos clientes.'
    },
    { id: 2,
        pergunta: 'Quais são as taxas e encargos associados às transações bancárias?',
        resposta: 'Nós acreditamos em oferecer serviços bancários justos e transparentes aos nossos clientes, por isso oferecemos diversas transações sem taxas, como transferências entre contas da mesma instituição e saques em caixas eletrônicos da nossa rede. Entretanto, alguns serviços podem ter taxas associadas, como transferências para outras instituições financeiras, emissão de boletos e solicitação de cartões adicionais. Os valores das taxas são sempre informados de forma clara e objetiva para nossos clientes, garantindo que não haja surpresas na hora de pagar. Além disso, não cobramos encargos ocultos ou tarifas abusivas, e estamos sempre buscando oferecer serviços ainda mais vantajosos para nossos clientes.'
    },
    { id: 3,
        pergunta: 'Como posso acessar minha conta bancária digital?',
        resposta: 'Oferecemos diversas opções de acesso para que nossos clientes possam gerenciar sua conta bancária digital com facilidade e conveniência. É possível acessar a conta pelo nosso aplicativo móvel, disponível para download na App Store e no Google Play, ou pelo nosso site, usando um computador ou tablet. Para se autenticar, nossos clientes podem usar uma combinação de login e senha, biometria (impressão digital ou reconhecimento facial) ou código de acesso único gerado pelo aplicativo. Além disso, para garantir a segurança das transações, utilizamos tecnologias avançadas de criptografia e monitoramento constante. Se você tiver alguma dúvida sobre como acessar sua conta, nossa equipe de atendimento ao cliente está sempre pronta para ajudar.'
    },
    
    { id: 4,
        pergunta: 'Como faço para bloquear ou cancelar meu cartão bancário digital se eu perder ou ele for roubado?',
        resposta: 'Se você perder seu cartão bancário digital ou suspeitar de uso não autorizado, é importante agir rapidamente para garantir a segurança de sua conta e dinheiro. Você pode bloquear ou cancelar seu cartão de forma rápida e fácil usando nosso aplicativo móvel ou site, ou entrando em contato com nossa central de atendimento ao cliente. O bloqueio ou cancelamento será efetuado imediatamente, e um novo cartão será enviado para seu endereço cadastrado. Além disso, recomendamos que você atualize regularmente suas informações de contato e mantenha um olho em suas transações para identificar qualquer atividade suspeita. Se você tiver qualquer dúvida ou preocupação, nossa equipe de atendimento ao cliente está sempre disponível para ajudá-lo.'
    },
    { id: 5,
        pergunta: 'Qual é o limite de transferência diária?',
        resposta: 'O limite de transferência diária em um banco digital pode variar de acordo com alguns fatores, como o dia da semana e o saldo disponível na conta.'
    },
    { id: 6,
        pergunta: 'Quais os diferenciais do Sharks Bank?',
        resposta: 'O Sharks Bank é um banco digital que se destaca pelo seu compromisso em oferecer uma experiência bancária segura, eficiente e personalizada para os seus clientes. Entre as principais vantagens de ter uma conta no Sharks Bank, destaca-se a possibilidade de realizar transações bancárias sem sair de casa, utilizando um aplicativo intuitivo e fácil de usar. Além disso, o banco oferece taxas competitivas, vantagens exclusivas para os seus clientes, como cashback em compras, além de um atendimento ao cliente personalizado e ágil, que se preocupa em solucionar dúvidas e problemas de forma rápida e eficiente. O Sharks Bank tem como objetivo oferecer uma experiência bancária única e personalizada para cada um dos seus clientes, levando em conta as suas necessidades e expectativas individuais.'
    },
    { id: 7,
        pergunta: 'Como posso entrar em contato com o atendimento ao cliente do Sharks Bank?',
        resposta: 'Para entrar em contato com o atendimento ao cliente do Sharks Bank, você pode utilizar o chat disponível no nosso aplicativo, que está disponível 24 horas por dia, 7 dias por semana. Além disso, é possível entrar em contato com o nosso suporte por telefone ou por e-mail, utilizando os dados de contato disponíveis no nosso site. Estamos sempre à disposição para ajudar a solucionar dúvidas, problemas ou sugestões dos nossos clientes de forma rápida e eficiente.'
    },
    { id: 8,
        pergunta: 'Como faço para solicitar um cartão de débito do Sharks Bank?',
        resposta: 'Para solicitar um cartão de débito do Sharks Bank, é necessário ser cliente do banco e ter uma conta ativa. Depois disso, é só acessar o nosso aplicativo, selecionar a opção de solicitação de cartão de débito e seguir as instruções para confirmar o seu endereço de entrega. O cartão de débito será enviado para o endereço cadastrado e, ao recebê-lo, basta seguir as instruções de ativação para começar a utilizá-lo. O cartão de débito do Sharks Bank é aceito em milhares de estabelecimentos no Brasil e no mundo, e é uma forma prática e segura de realizar compras e saques em caixas eletrônicos.'
    },
    
   
   
   
    ]

    return (
        <div className={styles.conteiner}>
            {perguntas.map((item) => (
            <div className={styles.pergunta}>
            <details >
                <summary >{item.pergunta }</summary>
                <div className={styles.resposta}>{item.resposta}</div>
                
            </details>
            
            </div>
            ))}
        </div>

        // return(
        //     <div>
        //         <label>{props.label}</label>
        //         <select>
        //             {props.itens.map(item => <option key={item}>{item}</option>)}
        //         </select>
        //     </div>
    )

}

export default ListaAjuda