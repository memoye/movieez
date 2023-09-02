import { useEffect, useState } from 'react';
import { CustomButton, Featured, MovieCard } from '../../components';
import styles from './movies.module.css';
import { filterBtns, dummyMovies, sampleMovie } from '../../utils'


const Movies = () => {
    const [filters, setFilters] = useState(filterBtns)
    const [selected, setSelected] = useState([])

    //
    const [page, setPage] = useState(2)
    const [totalPages, setTotalPages] = useState(20)

    const handleFilterClick = (filterId) => {
        const updatedFilters = filters.map(filter =>
            filter.id === filterId
                ? { ...filter, isActive: true }
                : { ...filter, isActive: false }
        );
        setFilters(updatedFilters);
    };

    useEffect(() => {
        setSelected(dummyMovies)
    })


    return (
        <main className={ styles.movies }>
            {/* 
            <div className={ styles.filterBtnsContainer }>
                {
                    filters.map((btn) => <CustomButton
                        key={ btn.id }
                        { ...btn }
                        customStyle={ `${styles.filterBtn} ${btn.isActive && styles.filterBtnActive}` }
                        handleClick={ () => {
                            handleFilterClick(btn.id, setFilters)
                            // setSelected(custom Filter from btn Here)
                        } }
                    />)
                }
            </div> 
            */}
            <section className={ styles.moviesGroup }>
                <Featured
                    section={
                        {
                            title: 'Now Playing',
                            movies: dummyMovies,
                            preview: 3,
                            // poster: false
                        }
                    }
                />
            </section>

            <section className={ styles.moviesGroup }>
                <Featured
                    section={
                        {
                            title: 'Popular',
                            movies: dummyMovies,
                            preview: 6,
                            poster: true
                        }
                    }
                />
            </section>

            <section className={ styles.moviesGroup }>
                <Featured
                    section={
                        {
                            title: 'Top Rated',
                            movies: dummyMovies,
                            preview: 6,
                            poster: true
                        }
                    }
                />
            </section>

            <section className={ styles.moviesGroup }>
                <Featured
                    section={
                        {
                            title: 'Upcoming',
                            movies: dummyMovies,
                            preview: 6,
                            poster: true
                        }
                    }
                />
            </section>

            {/* <div className={ styles.pagesNav }>
                <CustomButton
                    label={ '⇤ Prev' }
                    customStyle={ `${styles.pagesBtn} ${page <= 1 && styles.hideBtn}` }
                    handleClick={ () => { setPage(prev => prev - 1) } }
                />
                <CustomButton
                    label={ 'Next ⇥' }
                    customStyle={ `${styles.pagesBtn} ${page >= totalPages && styles.hideBtn}` }
                    handleClick={ () => { setPage(prev => prev + 1) } }
                />
            </div> */}
        </main>
    )
}
export default Movies