import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Trending from './pages/Trending';
import CustomHeader from './components/CustomHeader';


function App() {

  useEffect(() => {
    console.log("App.jsx")
  }, [])

  return (
    <div className="App">
      <Router>
        <CustomHeader />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/trending' element={ <Trending /> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
