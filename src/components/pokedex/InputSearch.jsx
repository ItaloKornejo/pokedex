import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/inputsearch.css'
import { useSelector } from 'react-redux'

const InputSearch = () => {

  const themeColor = useSelector(state => state.themeColor)
  const navigate = useNavigate()

  const submit = (e) => {

    e.preventDefault()
    navigate(`/pokedex/${e.target.search.value.toLowerCase()}`)
    console.log(e.target.search.value);

  }

  console.log();

  return (
    <div className='inputsearch-container'>
      <form className='inputsearch-form' onSubmit={submit}>
        <input className='inputsearch__input' id='search' placeholder='Search Pokemon' />
        <button className={`inputsearch__btn theme-btn-${themeColor}`}>Search</button>
      </form>

    </div>
  )
}

export default InputSearch