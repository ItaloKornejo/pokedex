import React from 'react'
import PokemonInfo from './PokemonInfo'
import PokemonStats from './PokemonStats'
import './styles/pokemoncarddetails.css'

const PokemonCardDetails = ({pokemon}) => {
  return (
    <div className='pokemon-card-detail--container'>
        <div className='pokemon-card-detail__banner'></div>
        <img className='pokemon-card-detail__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt=''></img>
        <PokemonInfo pokemon={pokemon}/>
        <PokemonStats pokemon={pokemon}/>
    </div>
  )
}

export default PokemonCardDetails