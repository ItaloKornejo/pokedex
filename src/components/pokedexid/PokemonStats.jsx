import React from 'react'
import './styles/pokemonstats.css'
import './styles/pokemonmovements.css'

const PokemonStats = ({ pokemon }) => {

    return (
        <div className='stats-contaier'>
            <h2>Stats</h2>
            {
                pokemon?.stats.map(stat => (
                    <div key={stat.stat.name} className='stats__stat'>
                        <div className='stat__stat-data'>
                            <span id='stat__name'>{stat.stat.name}</span>
                            <span id='stat__base-stat'>{stat.base_stat}/150</span>
                        </div>
                        <div className='stats__bar-container'>
                            <div className='stats__bar' style={({width:`${(stat.base_stat*2)/3}%`})}></div>
                        </div>
                    </div>))
            }

        </div>
    )
}

export default PokemonStats