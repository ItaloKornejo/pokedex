import React from 'react'
import{Link} from 'react-router-dom'
import './styles/pokemon404.css'
import { useSelector } from 'react-redux'

const Pokemon404 = () => {
  const themeColor = useSelector(state => state.themeColor)
  return (
    <div className='pokemon404-container'>
    <img src='\images\pokemonbyid\pokemon-unknown.png' alt=''/>
    <h1 className={`pokemon404__title theme_subtitle-${themeColor}`}>Pokemon not Found</h1>
    <Link className={`pokemon404__btn theme-404-btn-${themeColor} `} to='/pokedex'>Back to Pokedex</Link>
    </div>
  )
}

export default Pokemon404