import { HiHeart } from 'react-icons/hi'
import styles from './favorites.module.css'
import { dummyMovies, sampleMovie } from '../../utils'
import { MovieCard } from '../../components';
import Page from '../../components/Page';

const Favorites = () => {
    const favorites = dummyMovies

    return (
        <Page>
            <h1 className={ styles.mainTitle }>
                <HiHeart
                    className={ styles.heartIcon }
                /> My Favorites</h1>
            <section className={ styles.favsGrid }>
                {
                    favorites.length < 1 ?
                        <p className={ styles.msg }>Movies and Series you like will appear here...</p> :
                        favorites.map(movie => (
                            <MovieCard
                                key={ movie.id }
                                { ...movie }
                            />)
                        )

                }
            </section>
        </Page>
    )
}
export default Favorites