import styles from './customHeader.module.css';
import { logo, menuDots, pic, DownIcon, SearchIcon, CloseIcon, MenuIcon } from '../../assets'
import { useEffect, useState } from 'react';
import CustomNav from './CustomNav';



const CustomHeader = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const applyBg = () => {
        if (window.scrollY >= 25) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', applyBg)
    }, [])

    return (

        <header className={ `${styles.CustomHeader} ${scrolled && styles.addBg}` } >
            <div className={ `${styles.logo} ${!scrolled && styles.fixColor}` }>
                <img src={ logo } alt="Movieez" />
                <span className={ styles.logoText }>Movieez!</span>
            </div>

            <nav className={ styles.nav }>
                <CustomNav styles={ styles } />
            </nav>

            <div className={ `${styles.search}` }>
                <input
                    type="text"
                    placeholder='Search by Title, Genres, etc.' />
                <button
                    type='submit'
                    className={ styles.searchSubmit }>
                    <SearchIcon />
                </button>
            </div>

            <div
                className={ `${hamburgerOpen ? styles.mobileMenu : styles.hide}` }>
                <CustomNav styles={ styles } />
                <CloseIcon
                    className={ styles.closeBtn }
                    onClick={ () => {
                        setHamburgerOpen(prev => !prev)
                    } } />
            </div>

            <div className={ styles.navEnd }>

                <div
                    className={ styles.hello }
                    onClick={ () => {
                        setHamburgerOpen(prev => !prev)
                    } }>
                    {/* <img src={ menuDots } alt="Open navigation" /> */ }
                    < MenuIcon className={ styles.hamburgerMenu } />
                </div>

                <div
                    style={ { background: `url(${pic}) no-repeat center center / cover` } }
                    className={ styles.profileBtn }>{ !pic && 'B' }</div>
                <DownIcon
                    className={ `${styles.downArrow} ${!scrolled && styles.fixColor}` } />
            </div>

        </header >
    )
}

export default CustomHeader