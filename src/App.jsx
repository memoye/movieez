import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Trending } from './pages';
import { HeaderAndFooter } from './components';
import poster from './assets/backgrounds/posterBg.webp'


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
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
