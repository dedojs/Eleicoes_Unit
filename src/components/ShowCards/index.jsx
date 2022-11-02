import { useState, useEffect } from 'react';
import Card from '../Card';
import './style.css';
import { chapas } from '../../mock/chapas';

export default function ShowCards() {
  const [candidatos, setCandidatos] = useState();
  const [eleitores, setEleitores] = useState();
  const [totalVotos, setTotalVotos] = useState();
  const URL_CHAPAS = 'http://localhost:81/eleicoes2-unit-app/src/api/getChapa.php';
  const URL_ELEITORES = 'http://localhost:81/eleicoes2-unit-app/src/api/getEleitor.php';

  const getInfo = async (url) => {
    const response = await fetch(url)
    const data = await response.json();
    // console.log(data)
    setCandidatos(data)
  }

  const getEleitor = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setEleitores(data);
    // console.log(data);
  };

  const getTotalVotes = () => {
    if (eleitores) {
      const totalVotes = eleitores.map((item) => item.candidato)
      setTotalVotos(totalVotes.length)
    }
  }

  const getVotos = (id) => {
    if (eleitores) {  
      const votes = eleitores.filter((item) => item.candidato === id)
      return votes.length
    }
  }

  useEffect(() => {
    getInfo(URL_CHAPAS);
    getEleitor(URL_ELEITORES);
  }, []);

  useEffect(() => {
    getTotalVotes();
  }, [eleitores]);

  return (
    <section className='containerPageShowCards'>
      <article className='containerShowCards'>
        {candidatos && (
          candidatos.map((item) => 
            <Card
            key={item.id}
            cod={item.id}
            name={item.name_chapa}
            imgMan={item.imagem_sindico}
            nameMan={item.name_sindico}
            cpfMan={item.cpf_sindico}
            imgSub={item.imagem_sub_sindico}
            nameSub={item.name_sub_sindico}
            cpfSub={item.cpf_sub_sindico}
            totalVotes={ totalVotos }
            votes={ getVotos(item.id) }
            />
          )
        )}
      </article>
    </section>
  )
}