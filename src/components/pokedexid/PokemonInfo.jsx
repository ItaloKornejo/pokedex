import React from 'react'
import './styles/pokemoninfo.css'

const PokemonInfo = ({ pokemon }) => {
    return (
        <div className='pokemon-info--container'>
            <span id='pokemon-info_id'>#{pokemon?.id}</span>
            <div className='pokemon-info__name'>
                <hr /><span>{pokemon?.name}</span><hr />
            </div>
            <div className='pokemon-info__data'>
                <div className='pokemon-info__data-weight'>
                    <p>Weight</p>
                    <span>{pokemon?.weight}</span>
                </div>
                <div className='pokemon-info__data-height'>
                    <p>height</p>
                    <span>{pokemon?.height}</span>
                </div>
            </div>
            <div className='pokemon-info__types-skills'>
                <div className='pokemon-info__types'>
                    <span>Type</span>
                    <div className='pokemon-info__type'>
                        {
                            pokemon?.types.map(type => (
                                <span key={type.slot}>{type.type.name}</span>
                            ))
                        }
                    </div>
                </div>
                <div className='pokemon-info__skills'>
                    <span>Skills</span>
                    <div className='pokemon-info__skill'>
                        {
                            pokemon?.abilities.map(ability => (
                                <span key={ability.slot} >{ability.ability.name}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonInfo