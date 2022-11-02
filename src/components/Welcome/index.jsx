import Login from '../Login';
import './style.css';

export default function Welcome() {
  
  return (
    <section className='containerPageWelcome'>
      <article className='containerWelcome'>
        <p> <strong> Bem vindos </strong>as eleiçoes Unit 2022 do prédio Jabuti Brasil!</p>
        <p>Para acessar nosso menu, informe abaixo o numéro do seu apartamento e o bloco, depois clique em entrar.</p>
        <p> <em>Lembrando que só permitido <strong>1 voto</strong> por apartamento.</em></p>
        <p>Que vença a democracia!</p>
        <p> <strong>Obrigado a todos, pelo comparecimento!</strong></p>
      </article>
      <Login />
    </section>
  )
}