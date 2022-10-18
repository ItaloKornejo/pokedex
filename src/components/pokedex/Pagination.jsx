import React from 'react'
import './styles/pagination.css'
import { useSelector } from 'react-redux'

const Pagination = ({ pokemonPerPage, pokemons, paginate, currentPage }) => {

  const themeColor = useSelector(state => state.themeColor)

  const pageNumbers = []

  const paginatioStart = [1,2,3,4,5]
  const paginationEnd = []
  const pageSection=[]



  if (pokemons) {
    for (let i = 1; i <= Math.ceil(pokemons.length / pokemonPerPage); i++) {
      pageNumbers.push(i)
    }
    if(pageNumbers.length > 8){
      for (let i = pageNumbers.length-4; i <= pageNumbers.length; i++) {
        paginationEnd.push(i)
      }
    }
  }

  const sectionPages = (currentPage) =>{
    if(currentPage>1 && currentPage<=3){
      pageSection.push('<',...paginatioStart,'....',pageNumbers.length,'>')
      console.log(pageSection);
      return pageSection
    }
    if(currentPage>3 && currentPage < paginationEnd[1]){
      pageSection.push('<',1,'....',currentPage-1,currentPage,currentPage+1,'...',pageNumbers.length,'>')
      console.log(pageSection);
      return pageSection
    }
    if(currentPage>=paginationEnd[1]){
      pageSection.push('<',1,'....',...paginationEnd)
      return pageSection
    }
    pageSection.push(...paginatioStart,'....',pageNumbers.length)
    console.log(pageSection);
    return pageSection
  }


  const handleBC = (page) => {
    let colorDefault='var(--color-red)';
    if(themeColor==='dark'){
      colorDefault='var(--color-dark-one)';
    }
    if (page === currentPage  )
      return ({ backgroundColor: colorDefault, color: 'var(--color-white)' })
    else if(page === '...' || page === '....' ){
      return ({  color: 'var(--color-gray)',cursor:'default',pointerEvents: 'none' })
    }else if(page === '<' || page === '>'){
      return ({ backgroundColor: colorDefault, color: 'var(--color-white)' })
    }
  }

  const handleChangePage = (page) =>{
    switch(page){
      case '<':paginate(currentPage-1) 
      break
      case '>':paginate(currentPage+1) 
      break
      default: paginate(page)
    }
  }

  return (
    <nav>
      <ul className='pagination'>
        {
          (pageNumbers.length > 1) ? <> { (pageNumbers.length<9) ? <> {pageNumbers.map(number => (
            <li className={`page__item theme-page-item-${themeColor}`} onClick={() => handleChangePage(number)} key={number} style={handleBC(number)}>
              <a className={`page__link theme-page-link-${themeColor}`} >
                {number}
              </a>
            </li>
          ))}</>: <> {sectionPages(currentPage).map(number => (
            <li className={`page__item theme-page-item-${themeColor}`} onClick={() => handleChangePage(number)} key={number}  style={handleBC(number)} >
              <a  className={`page__link theme-page-link-${themeColor}`}>
                {number}
              </a>
            </li>
          ))}</>} </> : <div></div>
        }
      </ul>
    </nav>
  )
}

export default Pagination