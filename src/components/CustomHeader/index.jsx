import styles from './customHeader.module.css';
import { logo, menuDots, pic, DownIcon, SearchIcon, CloseIcon, MenuIcon } from '../../assets'
import { useEffect, useState } from 'react';
import CustomNav from './CustomNav';
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';



const CustomHeader = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    const [userMenuOpen, setUserMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const applyBg = () => {
        if (window.scrollY >= 25) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    function logOut() {
        setIsLoggedIn(false)
    }

    function navEnd() {
        if (isLoggedIn) {
            return <>
                <div
                    className={
                        `${hamburgerOpen ?
                            styles.mobileMenu :
                            styles.hide}`
                    }
                >


                    <CustomNav
                        styles={ styles }
                        handleClick={
                            () => { mobileNav.current.focus() }
                        }

                    />

                    <CloseIcon
                        className={ styles.closeBtn }
                        onClick={ async () => {
                            setUserMenuOpen(false)
                            setHamburgerOpen(prev => !prev)
                        } } />
                </div>

                <div className={ styles.navEnd }>

                    <div
                        className={ styles.hamburger }
                        onClick={ () => {
                            setUserMenuOpen(false)
                            setHamburgerOpen(prev => !prev)
                        } }>
                        {/* <img src={ menuDots } alt="Open navigation" /> */ }
                        < MenuIcon className={ styles.hamburgerMenu } />
                    </div>

                    <Link to={ 'profile' }
                        style={ { background: `url(${pic}) no-repeat center center / cover` } }
                        className={ styles.profileBtn }>
                        { !pic && 'B' }
                    </Link>

                    <DownIcon
                        className={ `${styles.downArrow} ${userMenuOpen && styles.userMenuOpen}` }
                        onClick={ () => {
                            setUserMenuOpen(prev => !prev)
                            setHamburgerOpen(false)
                        } }
                    />

                    {
                        (!hamburgerOpen && userMenuOpen) &&
                        <ul className={ `${styles.userMenu}` }>
                            <li><Link to={ 'favorites' }>Favorites</Link></li>
                            <li><Link to={ 'watchList' }>Watch List</Link></li>
                            {/* <li><Link to={ 'profile' }> View Profile</Link></li> */ }
                            <button
                                onClick={ () => {
                                    logOut()
                                } }
                            ><BiLogOut className={ styles.BiLogOut } /> Logout</button>
                        </ul>
                    }

                </div>
            </>
        }
        else {
            return (
                <div className={ styles.login_signup }>
                    <button
                        className={ styles.login }>
                        Log In
                    </button>

                    <button
                        className={ styles.signup }>
                        Sign Up
                    </button>
                </div>
            )
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            applyBg()
            setHamburgerOpen(false)
            setUserMenuOpen(false)
        })
    }, [])

    return (

        <header className={ `${styles.CustomHeader} ${scrolled && styles.addBg}` } >
            <Link to={ '/' } className={ `${styles.logo} ${!scrolled && styles.fixColor}` }>
                <img src={ logo } alt="Movieez" />
                <span className={ styles.logoText }>Movieez!</span>
            </Link>

            <nav className={ styles.nav }>
                <CustomNav styles={ styles } />
            </nav>

            {/* <div className={ styles.profileDown }>

            </div> */}

            {/* <div className={ `${styles.search}` }>
                <input
                    type="text"
                    placeholder='Search by Title, Genres, etc.' />
                <button
                    type='submit'
                    className={ styles.searchSubmit }>
                    <SearchIcon />
                </button>
            </div> */}

            {
                navEnd()
            }
        </header >
    )
}

export default CustomHeader