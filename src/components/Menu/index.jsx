import { useHistory } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import MyContext from '../../context/MyContext';
import './style.css';

export default function Menu() {
  const [eleitores, setEleitores] = useState();
  const [isExist, setIsExist] = useState(false);
  const { userContext } = useContext(MyContext);
  const history = useHistory();
  const URL = 'http://localhost:81/eleicoes2-unit-app/src/api/getEleitor.php';

  const getEleitor = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setEleitores(data);
    // console.log(data);
  };

  const verifyEleitor = () => {
    if (eleitores) {
      const result = eleitores.find(({ cod }) => cod === userContext)
      if (result) setIsExist(true);
    }
  };

  useEffect(() => {
    getEleitor();
  }, []);

  useEffect(() => {
    verifyEleitor();
  }, [eleitores]);

  return (
    <section className='containerPageMenu'>
      <article className='containerMenu'>
        <h1>Menu</h1>
        <button
          onClick={ () => history.push('/cadastro')}
        >
          Cadastrar Chapa
        </button>
        
        <button
          onClick={ () => history.push('/result')}
        >
          Consultar Resultado
        </button>
        {isExist ? (
          <p><strong>Usuário já efetuou seu voto!</strong></p>
        ) : (
          <button
            onClick={ () => history.push('/urna')}
            disabled={ isExist }
          >
            Setor de votação
          </button>
        )}
      </article>
    </section>
  )
}