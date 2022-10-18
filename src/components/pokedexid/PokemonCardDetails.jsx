import React from 'react'
import PokemonInfo from './PokemonInfo'
import PokemonStats from './PokemonStats'
import './styles/pokemoncarddetails.css'
import { useSelector } from 'react-redux'

const PokemonCardDetails = ({pokemon}) => {
  const themeColor = useSelector(state => state.themeColor)
  return (
    <div className={`pokemon-card-detail--container theme-card-${themeColor}`}>
        <div className={`pokemon-card-detail__banner  bg-${pokemon?.types[0].type.name}`}></div>
        <img className='pokemon-card-detail__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt=''></img>
        <PokemonInfo pokemon={pokemon}/>
        <PokemonStats pokemon={pokemon}/>
    </div>
  )
}

export default PokemonCardDetails