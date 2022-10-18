import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokedexById from './pages/PokedexById'
import ProtectedRoutes from './pages/ProtectedRoutes'
import {Route,Routes} from 'react-router-dom'
import Footer from './components/shared/Footer'
import Theme from './components/shared/Theme'
import { useSelector } from 'react-redux'

function App() {
  const themeColor = useSelector(state => state.themeColor)

  return (
    <div className={`App theme-app-${themeColor}`}>
      <Theme/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokedexById />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
