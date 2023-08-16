import styles from './customHeader.module.css';
import { logo, menuDots, pic } from '../../assets'
import { NavLink } from 'react-router-dom';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { RiCloseFill } from 'react-icons/ri'
import { useEffect, useState } from 'react';


const CustomHeader = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(true)


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
                <NavLink to={ '/' } className={ styles.navBtn } > Home </NavLink>
                <NavLink to={ '/trending' } className={ styles.navBtn } >Trending</NavLink>
                <NavLink to={ '/dicover' } className={ styles.navBtn } >Discover</NavLink>
                <NavLink to={ '/shows' } className={ styles.navBtn } >Shows</NavLink>
                <NavLink to={ '/favorites' } className={ styles.navBtn } >Favorites</NavLink>
            </nav>

            { hamburgerOpen &&
                <>
                    <div className={ styles.mobileMenu }>
                        <NavLink to={ '/' } className={ styles.navBtn } > Home </NavLink>
                        <NavLink to={ '/trending' } className={ styles.navBtn } >Trending</NavLink>
                        <NavLink to={ '/discover' } className={ styles.navBtn } >Discover</NavLink>
                        <NavLink to={ '/shows' } className={ styles.navBtn } >Shows</NavLink>
                        <NavLink to={ '/favorites' } className={ styles.navBtn } >Favorites</NavLink>

                        <RiCloseFill className={ styles.closeBtn } onClick={ () => {
                            setHamburgerOpen(prev => !prev)
                        } } />

                    </div>
                </>
            }
            <div className={ styles.navEnd }>
                { !hamburgerOpen &&
                    <div className={ styles.menuDots } onClick={ () => {
                        setHamburgerOpen(prev => !prev)
                    } }>
                        <img src={ menuDots } alt="Open navigation" />
                    </div>
                }
                <div style={ { background: `url(${pic}) no-repeat center center / cover` } } className={ styles.profileBtn }>{ !pic && 'B' }</div>
                <HiOutlineChevronDown className={ styles.downArrow } />
            </div>

        </header >
    )
}

export default CustomHeader