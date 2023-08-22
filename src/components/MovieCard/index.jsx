import { useEffect } from 'react'
import styles from './movieCard.module.css'

const MovieCard = ({ poster, customStyles }) => {

    useEffect(() => {
        // console.log(poster)
    }, [])
    return (
        <div className={ `${styles.movieCard} ${customStyles && customStyles}` } >
            <div className={ styles.poster }>
                <img src={ poster } alt="title" />
            </div>
            <div className={ styles.cardOverlay }>
                insert +fav & openToNewPage icons
                will show only when hovered
            </div>
        </div>
    )
}
export default MovieCard