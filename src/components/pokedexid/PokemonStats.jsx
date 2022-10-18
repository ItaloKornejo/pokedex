import React from 'react'
import './styles/pokemonstats.css'
import './styles/pokemonmovements.css'
import { useSelector } from 'react-redux'
const PokemonStats = ({ pokemon }) => {
    const themeColor = useSelector(state => state.themeColor)
    return (
        <div className='stats-contaier'>
            <h2 className={`stats_title theme-text-${themeColor} `}>Stats</h2>
            {
                pokemon?.stats.map(stat => (
                    <div key={stat.stat.name} className='stats__stat'>
                        <div className='stat__stat-data'>
                            <span className={`stat__name theme-text-${themeColor} `}>{stat.stat.name}</span>
                            <span className={`stat__base-stat theme-card-text-${themeColor} `}>{stat.base_stat}/150</span>
                        </div>
                        <div className={`stats__bar-container theme-bar-${themeColor}`}>
                            <div className={`stats__bar`} style={({width:`${(stat.base_stat*2)/3}%`})}></div>
                        </div>
                    </div>))
            }

        </div>
    )
}

export default PokemonStats