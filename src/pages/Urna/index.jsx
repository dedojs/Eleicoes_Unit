import { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Card from '../../components/Card';
import ShowCards from '../../components/ShowCards'
import MyContext from '../../context/MyContext';
import fetchPost from '../../api/fetchPost';
import './style.css'

export default function Urna() {
  const { choice, userContext, setShowVotes } = useContext(MyContext);
  const history = useHistory();

  const payload = {
    cod: userContext,
    situacao: 1,
    candidato: choice && choice.cod
  }

  const vote = async (event) => {
    event.preventDefault();
    URL = 'http://localhost:81/eleicoes2-unit-app/src/api/postVote.php'
    // faz um post pro banco escolhando o voto
    await fetchPost(URL, payload);
    history.push('/success');
  }

  useEffect(() => {
    setShowVotes(false);
  }, []);

  return (
    <section>
      {!choice && (
        <div>
          <article className='containerTextChoise'>
            <p>Escolha uma das opções abaixo!</p>
          </article>
          <ShowCards />
        </div>
      )}
      {choice && (
        <article className='containerChoise'>
          <p><strong>Verifique abaixo a opção escolhida:</strong></p>
            <Card
            key={choice.cod}
            cod={choice.cod}
            name={choice.name}
            imgMan={choice.imgMan}
            nameMan={choice.nameMan}
            cpfMan={choice.cpfMan}
            imgSub={choice.imgSub}
            nameSub={choice.nameSub}
            cpfSub={choice.cpfSub}
            />
          <article className='containerVote'>
            <p>Clique em <strong>votar</strong> para confirmar a opção escolhida!</p>
            <button
              onClick={ vote }
            >
              Votar
            </button>
          </article>
        </article>
      )}
    </section>
  )
}