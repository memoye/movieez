import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Trending, Discover, Shows, Favorites } from './pages';
import { HeaderAndFooter } from './components';
// import poster from './assets/backgrounds/posterBg.webp'


function App() {

  useEffect(() => {

  }, [])

  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route element={ <HeaderAndFooter /> }>
            <Route path='/' element={ <Home /> } />
            <Route path='/trending' element={ <Trending /> } />
            <Route path='/discover' element={ <Discover /> } />
            <Route path='/shows' element={ <Shows /> } />
            <Route path='/favorites' element={ <Favorites /> } />
          </Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App
