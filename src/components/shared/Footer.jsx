import React from 'react'
import './styles/footer.css'
import { useSelector } from 'react-redux'

const Footer = () => {
  const themeColor = useSelector(state => state.themeColor)
  return (
    <div className='footer'>
        <div className={`footer__red theme-footer-${themeColor}`}>
            <div className='footer__black'></div>
            <div className='footer__circle'>
                <div className='footer__circle-int'></div>
            </div>
        </div>
    </div>
  )
}

export default Footer