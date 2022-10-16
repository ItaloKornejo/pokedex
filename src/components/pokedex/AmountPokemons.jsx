import React from 'react'
import './styles/amountpokemons.css'
const AmountPokemons = ({setPostsPerPage}) => {
    
    const handleChange = (e) => {
        console.log(e.target.value);
        setPostsPerPage(e.target.value)
    }

  return (
    <select className='amountpokemons__select' onChange={handleChange}>
            <option value={20}>20</option>
            <option value={16}>16</option>
            <option value={12}>12</option>
            <option value={8}>8</option>
            <option value={4}>4</option>
    </select>
  )
}

export default AmountPokemons