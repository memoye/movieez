import styles from './shows.module.css'
import { useEffect, useState } from 'react';
import { CustomButton, Featured, MovieCard } from '../../components';
import { filterBtns, dummyMovies, sampleMovie, showCategories } from '../../utils'
import Page from '../../components/Page';

const Shows = () => {
    const [filters, setFilters] = useState(showCategories)
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

    const popularMovies = {
        title: "Popular movies",
        movies: dummyMovies,
        preview: 3
    }

    useEffect(() => {
        setSelected(dummyMovies)
    })

    return (
        <Page>
            {/* <div className={ styles.filterBtnsContainer }>
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
            </div> */}

            {/* <section className={ styles.showsGrid }>
                {
                    selected.map((movie, index) =>
                        <MovieCard
                            // poster={ true }
                            key={ index }
                            { ...sampleMovie }
                        />)
                }

            </section> */}
            <section className={ styles.showGroup }>
                <Featured
                    section={
                        {
                            title: 'Airing Today',
                            movies: dummyMovies,
                            preview: 3,
                            // poster: false
                        }
                    }
                />
            </section>

            <section className={ styles.showGroup }>
                <Featured
                    section={
                        {
                            title: 'On the Air',
                            movies: dummyMovies,
                            preview: 3,
                            // poster: false
                        }
                    }
                />
            </section>


            <section className={ styles.showGroup }>
                <Featured
                    section={
                        {
                            title: 'Popular',
                            movies: dummyMovies,
                            preview: 3,
                            // poster: false
                        }
                    }
                />
            </section>

            <section className={ styles.showGroup }>
                <Featured
                    section={
                        {
                            title: 'Popular',
                            movies: dummyMovies,
                            preview: 3,
                            // poster: false
                        }
                    }
                />
            </section>

            <section className={ styles.showGroup }>
                <Featured
                    section={
                        {
                            title: 'Top Rated',
                            movies: dummyMovies,
                            preview: 3,
                            // poster: false
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
        </Page>
    )
}
export default Shows