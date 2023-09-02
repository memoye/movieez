import './App.css'
import { useEffect, useState } from 'react'
import { BiCloset, BiLoader } from 'react-icons/bi'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Movies, Discover, Shows, Favorites } from './pages';
import { HeaderAndFooter } from './components';
import Profile from './pages/Profile';
import { sampleMovie } from './utils';
// import poster from './assets/backgrounds/posterBg.webp'

function App() {


  const [isLoading, setIsLoading] = useState(false)
  const [trailerModalOpen, setTrailerModalOpen] = useState(true)


  useEffect(() => {

  }, [])


  if (isLoading) {
    return (
      <div className='loading'>
        <div className='loadingImg'>
          Loading...
        </div>
      </div>
    )
  }

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route element={ <HeaderAndFooter /> }>
            <Route path='/' element={ <Home /> } />
            <Route path='/movies' element={ <Movies /> } />
            <Route path='/shows' element={ <Shows /> } />
            <Route path='/favorites' element={ <Favorites /> } />
            <Route path='/profile' element={ <Profile /> } />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
