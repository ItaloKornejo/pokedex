import React, { useEffect } from 'react'
import FormHome from '../components/home/FormHome'
import './styles/Home.css'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useSelector } from 'react-redux'

const Home = () => {

  const themeColor = useSelector(state => state.themeColor)

  console.log('FROM HoME',themeColor);

  return (
    <article className='pokedex'>
      <img className='pokedex__img' src='/images/home/pokedex_logo.png' alt=''/>
      <h2 className={`pokedex__subtitle theme_subtitle-${themeColor}`}>Hi trainer</h2>
      <p className={`pokedex__text theme-text-${themeColor}`}>Enter you Name</p>
      <FormHome/>
    </article>
  )
}

export default Home