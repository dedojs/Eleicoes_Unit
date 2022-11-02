import { useContext, useEffect } from 'react';
import Card from '../../components/Card'
import { useHistory } from "react-router-dom";
import MyContext from '../../context/MyContext';
import InfoCreateCard from '../../components/InfoCreateCard';
import './style.css'

export default function CadastrarChapa() {
  const history = useHistory();
  const { dataNewTeam, setShowVotes } = useContext(MyContext);

  useEffect(() => {
    setShowVotes(false)
  }, [])

  return (
    <section className="containerCreateCard">
      <div className='buttonMenuContainer'>
        <button
          className='buttonMenu'
          onClick={ () => history.push('/menu')}
          >
            Menu
        </button>
      </div>
      <section className='createCard'>
        <InfoCreateCard />
        <Card
          cod={dataNewTeam.id}
          name={dataNewTeam.name_chapa}
          imgMan={dataNewTeam.imagem_sindico}
          nameMan={dataNewTeam.name_sindico}
          cpfMan={dataNewTeam.cpf_sindico}
          imgSub={dataNewTeam.imagem_sub_sindico}
          nameSub={dataNewTeam.name_sub_sindico}
          cpfSub={dataNewTeam.cpf_sub_sindico}
        />
      </section>
    </section>
  )
}
