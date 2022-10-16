import React from 'react'
import './styles/pagination.css'

const Pagination = ({ postsPerPage, pokemons, paginate, currentPage }) => {


  const pageNumbers = []

  if (pokemons) {
    for (let i = 1; i <= Math.ceil(pokemons.length / postsPerPage); i++) {
      pageNumbers.push(i)
    }
  }

  const handleBC = (page) => {
    if (page === currentPage)
      return ({ backgroundColor: 'var(--color-red)', color: 'var(--color-white)' })
    else return ({ backgroundColor: '', color: 'var(--color-gray)' })
  }

  return (
    <nav>
      <ul className='pagination'>
        {
          (pageNumbers.length > 1) ? <> {pageNumbers.map(number => (
            <li key={number} className='page__item' style={handleBC(number)}>
              <a onClick={() => paginate(number)} className='page__link' >
                {number}
              </a>
            </li>
          ))}</> : <div></div>
        }
      </ul>
    </nav>
  )
}

export default Pagination