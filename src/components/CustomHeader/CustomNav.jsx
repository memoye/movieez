// import styles from './customHeader.module.css';
import { NavLink } from 'react-router-dom';

const CustomNav = ({ styles }) => {
    return (
        <>
            <NavLink to={ '/' } className={ styles.navBtn } > Home </NavLink>
            <NavLink to={ '/trending' } className={ styles.navBtn } >Trending</NavLink>
            <NavLink to={ '/discover' } className={ styles.navBtn } >Discover</NavLink>
            <NavLink to={ '/shows' } className={ styles.navBtn } >Shows</NavLink>
            <NavLink to={ '/favorites' } className={ styles.navBtn } >Favorites</NavLink>
        </>
    )
}
export default CustomNav