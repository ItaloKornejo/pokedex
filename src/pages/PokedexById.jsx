import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexid/Pokemon404'
import PokemonCardDetails from '../components/pokedexid/PokemonCardDetails'
import PokemonMovements from '../components/pokedexid/PokemonMovements'
import Header from '../components/shared/Header'
import './styles/pokemonbyid.css'

const PokedexById = () => {

  const {id} = useParams()

  const [pokemon, setPokemon] = useState()
  const [hasError,setHasError] = useState(false)

  useEffect(()=>{
    const URL=`https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err)
        setHasError(true)
      })

  },[])

  console.log(pokemon)

  if(hasError){
    return <Pokemon404/>
  }
  return (
    <>
    <Header/>
    <div className='pokedexbyid-container'>
    <PokemonCardDetails pokemon={pokemon}/>
    <PokemonMovements pokemon={pokemon}/>
    </div>
    </>
  )
}

export default PokedexById