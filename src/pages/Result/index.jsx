import { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Card from '../../components/Card';
import ShowCards from '../../components/ShowCards'
import MyContext from '../../context/MyContext';
import './style.css'

export default function Result() {
  const { setShowVotes } = useContext(MyContext);
  const history = useHistory();

  useEffect(() => {
    setShowVotes(true);
  }, []);

  return (
    <section>
      <article className='containerTextChoise'>
        <p>Resultado Parcial</p>
        <button
        onClick={ () => history.push('/menu')}
        >
          Menu
        </button>
      </article>
      <article className='containerResultCards'>
        <ShowCards/>
      </article>
    </section>
  )
}