import './App.css'
import { useEffect, useRef, useState } from 'react'
import { BiCloset, BiLoader } from 'react-icons/bi'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Movies, Discover, Shows, Favorites } from './pages';
import { HeaderAndFooter } from './components';
import Profile from './pages/Profile';
import { sampleMovie } from './utils';
import WatchList from './pages/WatchList';
import Modal from 'react-responsive-modal';
// import poster from './assets/backgrounds/posterBg.webp'

function App() {
  const myModal = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const [trailerModalOpen, setTrailerModalOpen] = useState(true)
  const modalContent = (<iframe
    className={ 'frame' }
    src="https://www.youtube.com/embed/9jH0wDp5GnQ"
    title="How Spider-Verse Broke The Rules of 3D Animation"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>)

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
      <div ref={ myModal }>
      </div>

      <Modal
        container={ myModal.current }
        open={ true }
      >
        { modalContent }
      </Modal>
      <Router>
        <Routes>
          <Route element={ <HeaderAndFooter /> }>
            <Route path='/' element={ <Home /> } />
            <Route path='/movies' element={ <Movies /> } />
            <Route path='/shows' element={ <Shows /> } />
            <Route path='/favorites' element={ <Favorites /> } />
            <Route path='/watchList' element={ <WatchList /> } />
            <Route path='/profile' element={ <Profile /> } />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
