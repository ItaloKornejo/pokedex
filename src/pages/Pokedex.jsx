import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AmountPokemons from '../components/pokedex/AmountPokemons'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import Header from '../components/shared/Header'
import './styles/Pokedex.css'
import { useDispatch } from 'react-redux'
import { setFilterDataGlobal } from '../store/slices/filterdata.slice'


const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState('All pokemons')
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonPerPage, setPokemonPerPage] = useState(20)

  const dispatch = useDispatch()
  const themeColor = useSelector(state => state.themeColor)
  dispatch(setFilterDataGlobal({type:typeSelected,amount:pokemonPerPage,page:currentPage}))

  useEffect(() => {
    setCurrentPage(1)
    if (typeSelected !== 'All pokemons') {
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(e => (e.pokemon))
          setPokemons(result)
        })
        .catch(err => console.log(err))
    } else {
      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=500&offset=0'
      axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    }
  }, [typeSelected])

  useEffect(()=>{
    
  },[typeSelected,currentPage,pokemonPerPage])

  const userName = useSelector(state => state.userName)
  const indexOfLastPokemon = currentPage * pokemonPerPage
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage
  const currentPokemonsPage = pokemons?.slice(indexOfFirstPokemon, indexOfLastPokemon)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className='pokemons-container'>
      <Header/>
      <p className={`pokedex__main-text theme-text-${themeColor}`}><span className={`pokedex__main-text-name theme_subtitle-${themeColor}`} >Welcome {userName} </span >,here you can find your favorite pokemon</p>
      <div className='banner-container'>
        <InputSearch />
        <SelectByType setTypeSelected={setTypeSelected} />
        <AmountPokemons setPokemonPerPage={setPokemonPerPage} setCurrentPage={setCurrentPage}/>
      </div>


      <main>
        <div className='card-container'>
          {
            currentPokemonsPage?.map(pokemon => (<CardPoke key={pokemon.name} url={pokemon.url} />))
          }
        </div>
      </main>
      <Pagination pokemonPerPage={pokemonPerPage} pokemons={pokemons} paginate={paginate} currentPage={currentPage} />
    </div>
  )
}


export default Pokedex