import { useState } from 'react';
import styles from './home.module.css'
import { CustomButton, Featured, MovieCard, Ellipse } from '../../components';
import { BsArrowRight, BsPlay, BsYoutube } from 'react-icons/bs'
import { SignUp } from '../../assets'
import { dummyMovies, sampleMovie, base_img_url, formatDate, preview } from '../../utils';
import { Link } from 'react-router-dom';
import { fetchVids, openRandomClip, openTrailer, } from '../../features/trailer/trailerSlice';
import { useDispatch } from 'react-redux';


const Home = () => {

    const dispatch = useDispatch()

    const handleOpenTrailer = () => {
        // Perform any necessary logic here
        dispatch(openTrailer());
        dispatch(fetchVids(sampleMovie.id));
    };

    const handleOpenRandomClip = () => {
        // Perform any necessary logic here
        dispatch(openRandomClip());
        dispatch(fetchVids(sampleMovie.id));
    };


    const continueWatching = {
        title: "Continue watching",
        movies: dummyMovies,
        preview: 5,
        poster: true
    }

    const popularMovies = {
        title: "Popular movies",
        movies: dummyMovies,
        preview: 3,
        poster: true
    }

    const recomendation = {
        title: "Since you enjoy ...",
        movies: dummyMovies,
        preview: 5,
        poster: true
    }

    // replace all sampleMovie to appropriate state

    return (
        <main className={ styles.home }>

            <section
                style={ {
                    background: `linear-gradient(to right,
                        rgba(0, 0, 0, 0.6), 
                        rgba(0, 0, 0, 0.1)
                      ), url(${base_img_url + sampleMovie.backdrop_path}) no-repeat top center / cover`
                } }
                className={ styles.heroContainer }>

                <section className={ styles.hero }>
                    <div className={ styles.heroContent }>
                        <article className={ styles.heroText }>
                            <div>
                                <h1 className={ styles.heroTitle }>{ sampleMovie.original_title }</h1>
                                <p className={ styles.heroDesc }>{ preview(sampleMovie.overview) } <Ellipse />  </p>
                                <div className={ styles.meta }>

                                    <div className={ styles.genres }>
                                        {
                                            sampleMovie.genres.map(genre => (<CustomButton
                                                key={ genre.id }
                                                label={ genre.name }
                                                customStyle={ styles.genrebtn }

                                            />))
                                        }
                                    </div>

                                    <p style={ { display: 'flex', placeItems: 'center' } }>
                                        { sampleMovie.vote_average } Rating
                                    </p>

                                    <p className={ styles.date }><span className={ styles.label }>Release date:</span> { formatDate(sampleMovie.release_date) }</p>

                                </div>
                            </div>

                            <div className={ styles.heroCTA }>
                                <CustomButton
                                    label={ 'Movie Clip' }
                                    icon={ <BsYoutube /> }
                                    filled={ true }
                                    handleClick={ handleOpenRandomClip }
                                />
                                <CustomButton
                                    label={ 'Watch Trailer' }
                                    icon={ <BsPlay /> }
                                    handleClick={ handleOpenTrailer }
                                />
                            </div>
                        </article>

                        <div className={ styles.heroImg }>
                            <img src={ `${base_img_url + sampleMovie.poster_path}` } alt={ sampleMovie.original_title } />
                        </div>
                    </div>

                </section>

            </section>
            <section className={ styles.affiliates }>
                <h3 className={ styles.affiliatesTitle }>{ "Production Companies" }</h3>

                <div className={ styles.companies }>
                    <div className={ `${styles.companyLogos}` }>
                        {
                            sampleMovie.production_companies.map((coy, index) => {
                                return (
                                    <img key={ coy.id } title={ coy.name } src={ `${base_img_url}${coy.logo_path}` } alt={ coy.name } />
                                )
                            })
                        }
                    </div>
                </div>
            </section>


            <section className={ styles.signupSection }>
                <div className={ styles.signupContent }>
                    <article className={ styles.signUpText }>
                        <h1 className={ styles.signUpTitle }>{ "Sign Up!" }</h1>
                        <p className={ styles.signUpDesc }>Unleash your inner movie buff! Get access to a huge selection of <span style={ { color: 'rgb(var(--theme-primary))' } }>Movies</span> and <span style={ { color: 'rgb(var(--theme-primary))' } }>Series</span> right at your fingertips! Get all of your favorite shows <u>organized</u>,
                            all in one place!</p>
                        <div className={ styles.signupBtn }>
                            <CustomButton
                                filled={ true }
                                label={ "SignUp" }
                                icon={ <SignUp /> }
                                handleClick={ () => { console.log('SignUp!') } }
                            />
                        </div>
                    </article>
                    <div className={ styles.signupSide }></div>
                </div>
            </section>

            <section className={ `${styles.featured}` }>
                <Featured
                    section={ continueWatching }
                />
            </section>

            <section className={ styles.featured }>
                <div className={ styles.featuredTitle }>
                    <h3> This week's series </h3>
                    <button className={ styles.moreBtn }>More <BsArrowRight className={ styles.rightArrow } /></button>
                </div>

                <div className={ styles.weekSeries }>

                    <MovieCard
                        { ...sampleMovie }
                        poster={ false }
                        customStyles={ styles.movie }
                    />

                    <div className={ styles.seriesInfo }>
                        <div className={ styles.seriesInfoText }>
                            <h4 className={ styles.seriesTitle }>{ "Lorem, ipsum dolor sit amet." }</h4>
                            <p className={ styles.seriesDesc }>{ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa rem nemo in deleniti enim consectetur, ipsum nihil iure modi doloremque consequatur. Eligendi dicta non repellat asperiores quia nam numquam minima tempore reprehenderit cupiditate? Officiis nemo velit voluptate earum harum quia labore repellendus? Incidunt cum earum dolor! Natus, numquam voluptatum!" }</p>
                        </div>
                        <CustomButton
                            label={ "Watch now" }
                            filled={ true }
                            customStyle={ styles.center }
                        />
                    </div>
                </div>
            </section>

            <section className={ `${styles.featured} ${styles.popularMovies}` }>
                <Featured
                    section={ popularMovies }
                />
            </section>

            <section className={ `${styles.featured}` }>
                <Featured
                    section={ recomendation }
                />
            </section>

        </main>
    )
}
export default Home