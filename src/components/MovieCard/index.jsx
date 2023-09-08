import { useEffect, useState } from 'react'
import styles from './movieCard.module.css'
import { BsHeartFill } from 'react-icons/bs'
import { HiExternalLink, HiSpeakerphone, HiStar } from 'react-icons/hi'
import { base_img_url, formatDate, langToStr, sampleMovie } from '../../utils'
import CustomButton from '../CustomButtons'


const MovieCard = (props) => {
    const [isFav, setIsFav] = useState(false)
    const { backdrop_path, poster, customStyles, genres, id, release_date, original_language, runtime } = props

    useEffect(() => {
        console.log()
        // console.log(props)
    }, [])

    return (
        <div
            className={ `${styles.movieCard} ${customStyles && customStyles}` } >
            <div className={ styles.poster }>
                <img className={ `${poster ? styles.posterStyle : styles.bkdrop}` } src={ `${base_img_url + (poster ? poster_path : backdrop_path)}` } alt="title" />
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
                        <span className={ styles.minorDeets }> { runtime && runtime + 'mins' }</span><span className={ styles.minorDeets }><HiSpeakerphone /> { original_language && langToStr(original_language) }</span>
                    </h3>

                    <div className={ styles.genres }>
                        {
                            genres?.map(genre => (<CustomButton
                                key={ genre.id }
                                label={ genre.name }
                                customStyle={ styles.genrebtn }
                            />))
                        }
                    </div>
                    <p className={ styles.date }><span className={ styles.label }>Release date:</span> { release_date && formatDate(release_date) }</p>

                </div>
            </div>
        </div>
    )
}
export default MovieCard