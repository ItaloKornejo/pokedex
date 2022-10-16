import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/selectbytype.css'

const SelectByType = ({setTypeSelected}) => {

    const [types, setTypes] = useState()
    useEffect(() => {
        const URL = 'https://pokeapi.co/api/v2/type'
        axios.get(URL)
            .then(res => setTypes(res.data.results))
            .catch(err => console.log(err))
    }, [])

    const handleChange = (e) => {
        setTypeSelected(e.target.value)
        console.log(e.target.value);
    }

// console.log(types);
    return (
        <select className='selectbytype__select' onChange={handleChange}>
            <option className='selectbytype__option' value='All pokemons'>All pokemons</option>
           {
            types?.map(type => (<option key={type.url} className='selectbytype__option' value={type.url}>{type.name}</option>))
           }
        </select>
    )
}

export default SelectByType