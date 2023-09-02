import { BsArrowRight } from 'react-icons/bs'
import styles from './featured.module.css'
import MovieCard from '../MovieCard'
import { sampleMovie } from '../../utils'
import { useEffect } from 'react'

const Featured = (props) => {
    const { title, movies, preview, poster } = props.section


    useEffect(() => {
        // console.log(props)
    }, [])

    return (
        <>
            <div className={ styles.featuredTitle }>
                <h3>{ title }</h3>
                <button className={ styles.moreBtn }>More <BsArrowRight className={ styles.rightArrow } /></button>
            </div>

            <div className={ styles.movieCardContainer }>
                {
                    movies.map((movie, index) => {
                        if (index <= preview) {
                            return (
                                <MovieCard
                                    key={ index }
                                    { ...movie }
                                    poster={ poster }
                                    customStyles={ styles.movieCard }
                                />)
                        }

                    })
                }
            </div>
        </>
    )
}
export default Featured