import React from 'react'
import './styles/pokemoninfo.css'

const PokemonInfo = ({ pokemon }) => {
    return (
        <div className='pokemon-info--container'>
            <span className={`pokemon-info_id letter-${pokemon?.types[0].type.name}`}>#{pokemon?.id}</span>
            <div className={`pokemon-info__name  letter-${pokemon?.types[0].type.name}`}>
                <hr className={`pokemon-info__hr  type-${pokemon?.types[0].type.name}`} />
                <span>{pokemon?.name}</span>
                <hr className={`pokemon-info__hr  type-${pokemon?.types[0].type.name}`} />
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
                                <span className={`pokemon-info__type-name type-${type.type.name}`} key={type.slot}>{type.type.name}</span>
                            ))
                        }
                    </div>
                </div>
                <div className='pokemon-info__skills'>
                    <span>Skills</span>
                    <div className='pokemon-info__skill'>
                        {
                            pokemon?.abilities.map(ability => (
                                <span className={`pokemon-info__skill-name letter-${pokemon.types[0].type.name}`} key={ability.slot} >{ability.ability.name}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonInfo