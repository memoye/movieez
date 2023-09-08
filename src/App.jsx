import './App.css'
import { useEffect, useRef, useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Movies, Shows, Favorites, Profile, SignIn, Details } from './pages';
import { HeaderAndFooter } from './components';
// import Profile from './pages/Profile';
import WatchList from './pages/WatchList';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { CloseIcon, loadingImg } from './assets';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from './features/trailer/trailerSlice';

function App() {

  const { trailerOpen, trailerId, randomClipOpen, randomClipId, loading } = useSelector((state) => state.trailer)
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(false)

  const closeIcon = <CloseIcon
    style={ { position: 'absolute', top: '-10px', right: '-6px', color: 'white', background: 'red', borderRadius: '50%', scale: '120%' } }
  />

  useEffect(() => {
    // console.log(`App.jsx`)
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

        <Modal
          open={ trailerOpen }
          center={ true }
          onClose={ () => dispatch(closeModal()) }
          classNames={ {
            overlay: 'customOverlay',
            modal: 'customModal'
          } }
          closeIcon={ closeIcon }
        >
          <iframe
            className={ 'frame' }
            src={ `https://www.youtube.com/embed/${trailerId}` }
            title="How Spider-Verse Broke The Rules of 3D Animation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal>

        <Modal
          open={ randomClipOpen }
          center={ true }
          onClose={ () => dispatch(closeModal()) }
          classNames={ {
            overlay: 'customOverlay',
            modal: 'customModal'
          } }
          closeIcon={ closeIcon }
        >
          <iframe
            className={ 'frame' }
            src={ `https://www.youtube.com/embed/${randomClipId}` }
            title="How Spider-Verse Broke The Rules of 3D Animation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal>

        <Routes>
          <Route element={ <HeaderAndFooter /> }>
            <Route path='/' element={ <Home /> } />
            <Route path='/movies' element={ <Movies /> } />
            <Route path='/shows' element={ <Shows /> } />
            <Route path='/favorites' element={ <Favorites /> } />
            <Route path='/watchList' element={ <WatchList /> } />
            <Route path='/profile' element={ <Profile /> } />
            <Route path='/details' element={ <Details /> } />
          </Route>

          <Route path={ '/signin' } element={ <SignIn /> } />
        </Routes>
      </Router >
    </div >
  )
}

export default App
