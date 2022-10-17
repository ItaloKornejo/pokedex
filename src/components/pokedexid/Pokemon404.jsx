import React from 'react'
import{Link} from 'react-router-dom'
import './styles/pokemon404.css'

const Pokemon404 = () => {
  return (
    <div className='pokemon404-container'>
    <img src='\images\pokemonbyid\pokemon-unknown.png' alt=''/>
    <h1>Pokemon not Found</h1>
    <Link to='/pokedex'>Back to Pokedex</Link>
    </div>
  )
}

export default Pokemon404