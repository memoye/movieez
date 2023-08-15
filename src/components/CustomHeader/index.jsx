import styles from './customNav.module.css';
import { logo, pic } from '../../assets'
import { NavLink } from 'react-router-dom';
import { HiOutlineChevronDown } from 'react-icons/hi';


const CustomHeader = () => {


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
            <div className={ styles.navEnd }>
                <div style={ { background: `url(${pic && pic}) no-repeat center center / cover` } } className={ styles.profileBtn }>{ !pic && 'B' }</div>
                <HiOutlineChevronDown className={ styles.downArrow } />
            </div>

        </header >
    )
}

export default CustomHeader