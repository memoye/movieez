import './App.css'
import { useEffect, useRef, useState } from 'react'
import { BiLoader } from 'react-icons/bi'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Movies, Discover, Shows, Favorites } from './pages';
import { HeaderAndFooter } from './components';
// import poster from './assets/backgrounds/posterBg.webp'


function App() {

  const [isLoading, setIsLoading] = useState(false)
  // const blob = useRef()

  // function followMouse(e) {
  //   const { clientX, clientY } = e;
  //   console.log(clientX, clientY)
  //   // blob.style.left=`${clientX}px`;
  //   // blob.style.top=`${clientY}px`;
  //   blob.current.animate({
  //     left: `${clientX}px`,
  //     top: `${clientY}px`
  //   }, { duration: 3000, fill: "forwards" })
  // }

  useEffect(() => {
    // window.addEventListener('pointermove', followMouse)
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
    <div className="App" >
      <Router>
        <Routes>
          <Route element={ <HeaderAndFooter /> }>
            <Route path='/' element={ <Home /> } />
            <Route path='/movies' element={ <Movies /> } />
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
