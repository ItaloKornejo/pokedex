import React from 'react'
import { useSelector } from 'react-redux'

const PokemonMovements = ({ pokemon }) => {
    const themeColor = useSelector(state => state.themeColor)
    return (
        <div className={`movements-container theme-card-${themeColor}`}>
            <h2 className={`movements-container__title theme-text-${themeColor}`}>Movements</h2>
            <div className='movements__spans'>
                {
                    pokemon?.moves.map(move => (<span className={`movements__span theme-moves-${themeColor}`} key={move.move.name}>{move.move.name}</span>))
                }
            </div>
        </div>
    )
}

export default PokemonMovements