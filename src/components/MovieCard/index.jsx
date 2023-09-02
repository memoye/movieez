import { useEffect, useState } from 'react'
import styles from './movieCard.module.css'
import { BsHeartFill } from 'react-icons/bs'
import { HiExternalLink, HiStar } from 'react-icons/hi'
import { base_img_url, formatDate, sampleMovie } from '../../utils'
import CustomButton from '../CustomButtons'


const MovieCard = (props) => {
    const [isFav, setIsFav] = useState(false)
    const { poster, customStyles } = props

    useEffect(() => {
        // console.log(poster)
        // console.log(props)
    }, [])

    return (
        <div
            className={ `${styles.movieCard} ${customStyles && customStyles}` } >
            <div className={ styles.poster }>
                <img className={ props.poster ? styles.posterStyle : null } src={ `${base_img_url + (props.poster ? props.poster_path : props.backdrop_path)}` } alt="title" />
            </div>
            <div className={ styles.cardOverlay }>
                <div className={ styles.rating }>
                    <HiStar style={ { fontSize: '1.5em' } } /> <span>{ props.vote_average }</span>
                </div>
                <div className={ styles.buttonsContainer }>
                    <button
                        className={
                            `${styles.heart} 
                        ${styles.hoverBtn} 
                        ${isFav && styles.fav}`
                        }
                        onClick={ () => {
                            setIsFav(prev => !prev)
                        } }
                    ></button>
                    <a
                        href={ props.homepage }
                        target='_blank'
                        className={
                            `${styles.openHomepage}
                     ${styles.hoverBtn}`
                        }><HiExternalLink /></a>
                </div>
                <div className={ styles.movieDetails }>

                    <h3 className={ styles.movieTitle }>
                        { props.original_title } <br />
                        <span className={ styles.minorDeets }> { props.runtime + 'mins' }</span><span className={ styles.minorDeets }> { props.original_language.toUpperCase() }</span>
                    </h3>

                    <div className={ styles.genres }>
                        {
                            props.genres.map(genre => (<CustomButton
                                key={ genre.id }
                                label={ genre.name }
                                customStyle={ styles.genrebtn }
                            />))
                        }
                    </div>
                    <p className={ styles.date }><span className={ styles.label }>Release date:</span> { formatDate(props.release_date) }</p>

                </div>
            </div>
        </div>
    )
}
export default MovieCard