import { useHistory } from "react-router-dom";
import { useContext } from 'react';
import MyContext from '../../context/MyContext';
import './style.css';

export default function Header() {
  const history = useHistory();
  const { userContext, setUserContext, setChoice } = useContext(MyContext);
  const logOut = () => {
    setUserContext('')
    setChoice('')
    history.push('/');
  }
  return (
    <section className='containerHeader'>
      <h1>Eleições Unit 2022</h1>
      {userContext && 
        <p>Apartamento: <strong>{ userContext }</strong></p>
      }
      {userContext && 
        <button
          onClick={ logOut }
        >
          Sair
        </button>
      }
    </section>
  )
}