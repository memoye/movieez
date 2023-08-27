import { HiHeart } from 'react-icons/hi'
import styles from './favorites.module.css'

const Favorites = () => {
    return (
        <main className={ styles.favorites }>
            <h1 className={ styles.mainTitle }>My Favorites <HiHeart style={ { transform: 'scale(150%)' } } /></h1>
        </main>
    )
}
export default Favorites