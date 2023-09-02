// import styles from './customHeader.module.css';
import { NavLink } from 'react-router-dom';

const CustomNav = ({ styles, handleClick }) => {
    return (
        <>
            <NavLink
                to={ '/' }
                className={ `${styles.navBtn}` }
                onClick={ handleClick }
            > Home </NavLink>
            <NavLink
                to={ '/movies' }
                className={ `${styles.navBtn}` }
                onClick={ handleClick }
            >Movies</NavLink>
            {/* <NavLink to={ '/discover' } className={ styles.navBtn } >Discover</NavLink> */ }
            <NavLink
                to={ '/shows' }
                className={ styles.navBtn }
                onClick={ handleClick }
            >Shows</NavLink>
            <NavLink
                to={ '/favorites' }
                className={ styles.navBtn }
                onClick={ handleClick }
            >Favorites</NavLink>

        </>
    )
}
export default CustomNav