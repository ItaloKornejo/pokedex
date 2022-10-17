import React from 'react'
import FormHome from '../components/home/FormHome'
import './styles/Home.css'

const Home = () => {
  return (
    <article className='pokedex'>
      <img className='pokedex__img' src='/images/home/pokedex_logo.png' alt=''/>
      <h2 className='pokedex__subtitle'>Hi trainer</h2>
      <p className='pokedex__text'>Enter you Name</p>
      <FormHome/>
    </article>
  )
}

export default Home