import { useContext } from 'react';
import { useHistory } from "react-router-dom";
import Card from '../../components/Card';
import MyContext from '../../context/MyContext';
import './style.css'

export default function Success() {
  const { choice, setShowVotes } = useContext(MyContext);
  const history = useHistory();

  const result = (event) => {
    event.preventDefault();
    setShowVotes(true);
    history.push('/result');
  }

  return (
    <section>
      <article className='containerChoise'>
        <p>Voto computado com<strong> Sucesso!</strong></p>
        {choice && (
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
        )}
        <article className='containerVote'>
          <p>Clique em <strong>resultado parcial</strong> para verificar a apuração!</p>
          <button
            onClick={ result }
          >
            Resultado parcial
          </button>
        </article>
      </article>
    </section>
  )
}