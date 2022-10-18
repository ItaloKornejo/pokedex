import React from 'react'
import './styles/theme.css'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { setThemeColorGlobal } from '../../store/slices/themecolor.slice'
import { useDispatch } from 'react-redux'

const Theme = () => {
    const dispatch = useDispatch()

    const [theme, setTheme] = useLocalStorage('theme', 'light')
    let defaultTheme

    if (theme === 'light') {
        defaultTheme = true
    } else {
        defaultTheme = false
    }

    const handleOnChange = (themeValue) => {
        if (themeValue === 'light') {
            dispatch(setThemeColorGlobal('dark'))
            setTheme('dark')
        } else {
            dispatch(setThemeColorGlobal('light'))
            setTheme('light')
        }
    };


    return (
        <div className="switch-toggle">
            <input className='switch-toggle__input' type="checkbox" id="scale" checked={!defaultTheme} onChange={() => handleOnChange(theme)} />
            <label className={`switch-toggle__label theme-toggle-${theme}`} htmlFor="scale"></label>
        </div>
    )
}

export default Theme