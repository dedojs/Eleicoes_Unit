import { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import MyContext from '../../context/MyContext';
import './style.css';
import fetchPost from '../../api/fetchPost';

export default function InfoCreateCard() {
  const [nameTeam, setNameTeam] = useState();
  const [nameSindico, setNameSindico] = useState();
  const [cpfSindico, setCpfSindico] = useState();
  const [urlSindico, setUrlSindico] = useState();
  const [nameSubSindico, setNameSubSindico] = useState();
  const [cpfSubSindico, setCpfSubSindico] = useState();
  const [urlSubSindico, setUrlSubSindico] = useState();
  const { setUserContext, setDataNewTeam } = useContext(MyContext);
  const history = useHistory();

  const handleInputChange = ({ target }) => {
    if (target.name === 'nameTeam') setNameTeam(target.value)
    if (target.name === 'nameSindico') setNameSindico(target.value)
    if (target.name === 'cpfSindico') setCpfSindico(target.value)
    if (target.name === 'urlSindico') setUrlSindico(target.value)
    if (target.name === 'nameSubSindico') setNameSubSindico(target.value)
    if (target.name === 'cpfSubSindico') setCpfSubSindico(target.value)
    if (target.name === 'urlSubSindico') setUrlSubSindico(target.value)
  }

  const dataNew = {
    name_chapa: nameTeam, 
    name_sindico: nameSindico, 
    cpf_sindico: cpfSindico,
    imagem_sindico: urlSindico,
    name_sub_sindico: nameSubSindico, 
    cpf_sub_sindico: cpfSubSindico,
    imagem_sub_sindico: urlSubSindico
  }

  const clearForm = () => {
    setNameTeam('')
    setNameSindico('')
    setCpfSindico('')
    setUrlSindico('')
    setNameSubSindico('')
    setCpfSubSindico('')
    setUrlSubSindico('')
  }

  const clickCreate = async (event) => {
    event.preventDefault();
    console.log(dataNew)
    const URL = 'http://localhost:81/eleicoes2-unit-app/src/api/postNewChapa.php';
    const result = await fetchPost(URL, dataNew);
    console.log('result', result);
    clearForm();
    history.push('/menu');
  }

  useEffect(() => {
    setDataNewTeam(dataNew)
  }, [
    nameTeam, 
    nameSindico, 
    cpfSindico,
    urlSindico,
    nameSubSindico, 
    cpfSubSindico,
    urlSubSindico
  ])

  return (
    <section className='containerPageInfoCard'>
      <article className='containerPageCreateCard'>
        <h1>Informações da Chapa</h1>
        <form action="get" className='containerForm'>
          <label htmlFor="">
            <input
              type="text"
              name='nameTeam'
              value={ nameTeam }
              onChange = { handleInputChange}
              placeholder='Nome da Chapa'
            /> 
          </label>
          <label htmlFor="">
            <input
              type="text"
              placeholder='Nome Sindico'
              name='nameSindico'
              value={ nameSindico }
              onChange = { handleInputChange }
            /> 
          </label>
          <label htmlFor="">
            <input
              type="text"
              placeholder='Cpf Sindico'
              name='cpfSindico'
              value={ cpfSindico }
              onChange = { handleInputChange }
            /> 
          </label>
          <label htmlFor="">
            <input
              type="text"
              placeholder='URL Imagem Sindico'
              name='urlSindico'
              value={ urlSindico }
              onChange = { handleInputChange }
            /> 
          </label>
          <label htmlFor="">
            <input
              type="text"
              placeholder='Nome Sub-Sindico'
              name='nameSubSindico'
              value={ nameSubSindico }
              onChange = { handleInputChange }
            /> 
          </label>
          <label htmlFor="">
            <input
              type="text"
              placeholder='Cpf Sub-Sindico'
              name='cpfSubSindico'
              value={ cpfSubSindico }
              onChange = { handleInputChange }
            /> 
          </label>
          <label htmlFor="">
            <input
              type="text"
              placeholder='URL Imagem Sub-Sindico'
              name='urlSubSindico'
              value={ urlSubSindico }
              onChange = { handleInputChange }
            /> 
          </label>
        </form>
        <button
          onClick = { clickCreate }
        >
          Cadastrar
        </button>
      </article>
    </section>
  )
}