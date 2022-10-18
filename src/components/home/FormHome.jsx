import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../store/slices/username.slice'
import { useSelector } from 'react-redux'


const FormHome = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const themeColor = useSelector(state => state.themeColor)

  const handleSubmit= event =>{
    event.preventDefault()
    dispatch(setUserNameGlobal(event.target.firstChild.value.trim()))
    navigate('/pokedex')
  }

  return (
    <form className='pokedex__form' onSubmit={handleSubmit}>
      <input className='pokedex__input' type='text' placeholder='Your name' />
      <button className={`pokedex__btn theme-btn-${themeColor}`}>Comenzar</button>
    </form>
  )
}

export default FormHome