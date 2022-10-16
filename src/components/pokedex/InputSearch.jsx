import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/inputsearch.css'

const InputSearch = () => {

const navigate = useNavigate()

    const submit = (e) =>{
        e.preventDefault()
        navigate(`/pokedex/${e.target.search.value}`)
        console.log(e.target.search.value);

    }

    console.log();

  return (
    <div className='inputsearch-container'>
        <form className='inputsearch-form'  onSubmit={submit}>
            <input className='inputsearch__input' id='search' placeholder='Search Pokemon'/>
            <button className='inputsearch__btn'>Search</button>
        </form>
        
    </div>
  )
}

export default InputSearch