import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexid/Pokemon404'
import PokemonCardDetails from '../components/pokedexid/PokemonCardDetails'
import PokemonMovements from '../components/pokedexid/PokemonMovements'
import Header from '../components/shared/Header'
import Loader from '../components/shared/Loader'
import './styles/pokemonbyid.css'

const PokedexById = () => {

  const {id} = useParams()

  const [pokemon, setPokemon] = useState()
  const [hasError,setHasError] = useState(false)
  const [loader, setLoader] = useState(true)

  useEffect(()=>{
    const URL=`https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err)
        setHasError(true)
      })

  },[])

  useEffect(() => {
    if (pokemon) {
      setTimeout(() => {
        setLoader(false)
      }, 800);
    }
  }, [pokemon])

  console.log(pokemon)
  console.log('HASH_Error: ',hasError)

  if(hasError){
    return <Pokemon404/>
  }

  return (
    <>{
      loader ? (<Loader/>) : (<>
        <Header/>
        <div className='pokedexbyid-container'>
        <PokemonCardDetails pokemon={pokemon}/>
        <PokemonMovements pokemon={pokemon}/>
        </div>
        </>)
    }
    </>
  )
}

export default PokedexById