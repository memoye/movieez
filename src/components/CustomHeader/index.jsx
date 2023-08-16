import styles from './customHeader.module.css';
import { logo, menuDots, pic } from '../../assets'
import { HiOutlineChevronDown } from 'react-icons/hi';
import { RiCloseFill } from 'react-icons/ri'
import { TiThMenu } from 'react-icons/ti'
import { useEffect, useState } from 'react';
import CustomNav from './CustomNav';


const CustomHeader = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)


    useEffect(() => {
        console.log(window.visualViewport)
    }, [])

    return (

        <header className={ styles.CustomHeader }>
            <div className={ styles.logo }>
                <img src={ logo } alt="Movieez" />
                <span className={ styles.logoText }>Movieez!</span>
            </div>

            <nav className={ styles.nav }>
                <CustomNav styles={ styles } />
            </nav>

            <div className={ `${styles.search}` }>
                <input type="text" placeholder='Search by Title, Genres, etc.' />
            </div>

            <div className={ `${hamburgerOpen ? styles.mobileMenu : styles.hide}` }>
                <CustomNav styles={ styles } />
                <RiCloseFill className={ styles.closeBtn } onClick={ () => {
                    setHamburgerOpen(prev => !prev)
                } } />
            </div>

            <div className={ styles.navEnd }>

                <div className={ styles.hello } onClick={ () => {
                    setHamburgerOpen(prev => !prev)
                } }>
                    {/* <img src={ menuDots } alt="Open navigation" /> */ }
                    < TiThMenu className={ styles.hamburgerMenu } />
                </div>

                <div style={ { background: `url(${pic}) no-repeat center center / cover` } } className={ styles.profileBtn }>{ !pic && 'B' }</div>
                <HiOutlineChevronDown className={ styles.downArrow } />
            </div>

        </header >
    )
}

export default CustomHeader