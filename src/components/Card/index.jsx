import { useContext } from 'react';
import MyContext from '../../context/MyContext';
import { chapas } from '../../mock/chapas'
import './style.css';

export default function Card({cod, name, imgMan, nameMan,
  cpfMan, imgSub, nameSub, cpfSub, votes, totalVotes}) {

  const { setChoice, showVotes } = useContext(MyContext);
  const chapa = {
    cod,
    name,
    imgMan,
    nameMan,
    cpfMan,
    imgSub,
    nameSub,
    cpfSub,
    votes,
    totalVotes,
  }

  
  const percent = (v, t) => {
    const percentVotes = ((v/t) * 100).toFixed(2)
    return percentVotes
  }

  
  const selectChoice = (event) => {
    event.preventDefault();
    setChoice(chapa)
  }

  return (
    <button
      className='containerPageCard'
      onClick={ selectChoice }
    >
      <p>Cod: <strong>{ cod }</strong></p>
      <p>Nome da Chapa:</p>
      <p><strong>{ name }</strong></p>
      <div>
        <fieldset>
          <legend>Síndico</legend>
          <div className='containerSindico'>
            <img src={ imgMan } alt="foto dos cachaceiros" />
            <div className='nomeCpf'>
              <p>{ nameMan }</p>
              <span>CPF: { cpfMan }</span>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Subsíndico</legend>
          <div className='containerSindico'>
            <img src={ imgSub } alt="foto dos cachaceiros" />
            <div className='nomeCpf'>
              <p>{ nameSub }</p>
              <span>CPF: { cpfSub }</span>
            </div>
          </div>
        </fieldset>
        {showVotes && (
          <div>
            <p>Votos: { votes }</p>
            <p><strong>Percentual de votos: { percent(votes, totalVotes) }%</strong></p>
          </div>
        )}
      </div>
    </button>
  )
}