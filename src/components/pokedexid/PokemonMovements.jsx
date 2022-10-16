import React from 'react'

const PokemonMovements = ({ pokemon }) => {
    return (
        <div className='movements-container'>
            <h2>Movements</h2>
            <div className='movements__spans'>
                {
                    pokemon?.moves.map(move => (<span className='movements__span' key={move.move.name}>{move.move.name}</span>))
                }
            </div>
        </div>
    )
}

export default PokemonMovements