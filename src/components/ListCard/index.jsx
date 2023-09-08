import { BiDetail, BiRightArrowAlt, BiTrash } from 'react-icons/bi'
import { dummyMovies, base_img_url, toTimeStr } from '../../utils'
import styles from './listcard.module.css'
import { RiMovieLine } from 'react-icons/ri'
import { BsClockHistory } from 'react-icons/bs'
import ReactStarsRating from 'react-awesome-stars-rating';

const ListCard = (props) => {
    const Rating = ReactStarsRating

    const { title, poster_path, original_title, release_date, vote_average, vote_count } = props

    return (
        <div className={ styles.listCard }>
            <div className={ styles.poster }>
                <img src={ `${base_img_url}${poster_path}` } alt={ title + ' poster' } />
            </div>
            <div className={ styles.desc }>
                <h3 className={ styles.name }>{ `${original_title}  (${release_date?.slice(0, 4)})` }</h3>

                <p className={ styles.rating }>
                    <Rating
                        value={ Number(vote_average).toFixed(1) / 2 }
                        size={ 14 }
                    />
                    <span className={ styles.rating_label }>{ Number(vote_average)?.toFixed(1) / 2 } </span>
                </p>

                <p className={ styles.rating_label2 }>{ `${vote_count} votes` } </p>

                <p className={ styles.duration }> <BsClockHistory style={ { color: 'rgb(var(--theme-primary))' } } />
                    <span className={ styles.duration_label }>{ toTimeStr(Number(props.runtime)) }</span>
                </p>
            </div>

            <div className={ styles.buttons }>
                <button className={ styles.del }><BiTrash /></button>
                <button className={ styles.viewtrailer }><RiMovieLine /></button>
            </div>
        </div >
    )
}
export default ListCard