import { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import MyContext from '../../context/MyContext';
import './style.css';

export default function Login() {
  const [apartment, setApartment] = useState();
  const [block, setblock] = useState();
  const [user, setUser] = useState();
  const { setUserContext } = useContext(MyContext);
  const history = useHistory();

  const handleInputChange = ({ target }) => {
    if (target.name === 'apartment') setApartment(target.value)
    if (target.name === 'block') setblock(target.value.toUpperCase())
  }

  const clickLogin = (event) => {
    event.preventDefault();
    setUserContext(user)
    setApartment('');
    setblock('');
    console.log(user);
    history.push('/menu');
  }

  useEffect(() => {
    setUser(apartment + block)
  }, [apartment, block])

  return (
    <section className='containerPageLogin'>
      <article className='containerLogin'>
        <h1>Login</h1>
        <form action="get" className='containerForm'>
          <label htmlFor="">
            <input
              type="number"
              name='apartment'
              value={ apartment }
              onChange = { handleInputChange}
              placeholder='Apartamento'
            /> 
          </label>
          <label htmlFor="">
            <input
              type="text"
              placeholder='Bloco'
              name='block'
              value={ block }
              onChange = { handleInputChange}
            /> 
          </label>
        </form>
        <button
          onClick = { clickLogin }
        >
          Entrar
        </button>
      </article>
    </section>
  )
}