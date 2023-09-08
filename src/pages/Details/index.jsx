import { Page, Actor, LikeBtn, CustomButton, Ellipse, MovieCard } from "../../components"
import { base_img_url, getYear, langToStr, sampleMovie } from "../../utils"
import ReactStarsRating from 'react-awesome-stars-rating'
import styles from './details.module.css'
import { RiPlayListAddLine } from "react-icons/ri"
import { BiPlay } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { fetchVids, openTrailer } from "../../features/trailer/trailerSlice"
import { useState } from "react"
import Member from "../../components/Member"
import YouTube from 'react-youtube'
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { fetchSimilar } from "../../features/similarMovies/similarMoviesSlice"


const Details = () => {
    const Rating = ReactStarsRating
    const dispatch = useDispatch()
    const { trailerId } = useSelector(state => state.trailer)
    const [castAmt, setCastAmt] = useState(5);
    const [crewAmt, setCrewAmt] = useState(5);


    const handleOpenTrailer = (movieId) => {
        // Perform any necessary logic here
        dispatch(openTrailer());
        dispatch(fetchVids(movieId));
    };

    useEffect(() => {
        dispatch(fetchVids(sampleMovie.id));
    }, [])

    return (
        <Page className={ styles.details }>
            <div className={ styles.details_hero }
                style={ {
                    background: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), 
                    url(${base_img_url + sampleMovie.backdrop_path}) no-repeat top center / cover`
                } }>

                <div className={ styles.details_poster }>
                    <img src={ base_img_url + sampleMovie.poster_path } alt={ sampleMovie.title } />
                </div>

                <div className={ styles.details_hero_text }>
                    <div className={ styles.titleNCTA }>
                        <div className={ styles.titleNRating }>
                            <h2 className={ styles.details_hero_title }>{ sampleMovie.title } <span className={ styles.year }>{ `(${getYear(sampleMovie.release_date)})` }</span></h2>

                            <div className={ styles.rating }>
                                <Rating
                                    value={ Number(sampleMovie.vote_average).toFixed(1) / 2 }
                                    size={ 14 }
                                />
                                <span className={ styles.rating_label }>{ `${(Number(sampleMovie.vote_average) / 2).toFixed(1)} (${sampleMovie.vote_count.toLocaleString()})` }</span>
                            </div>
                        </div>

                        <div className={ styles.btnsContainer }>
                            <div className={ styles.roundBtns }>
                                <button
                                    className={ `${styles.btn} ${styles.btn2}` }
                                >
                                    <RiPlayListAddLine
                                        className={ styles.addLine }
                                    />
                                </button>

                                <LikeBtn
                                    className={ styles.btn }
                                />
                            </div>

                            <button
                                className={ styles.playTrailer }
                                onClick={ () => {
                                    handleOpenTrailer(sampleMovie.id)
                                } }
                            >
                                <BiPlay style={ { fontSize: '1.75em' } } /> Play Trailer
                            </button>
                        </div>

                        <p className={ styles.tagLine }>{ sampleMovie.tagline }</p>

                        <div className={ styles.overview }>
                            <h4 className={ styles.overview_title }>Overview</h4>
                            <p className={ styles.overview_desc }>{ sampleMovie.overview }</p>
                        </div>
                    </div>

                    <div className={ styles.topCrew }>
                        <div className={ styles.job }>
                            <h4 className={ styles.job_title }>Director</h4>
                            {
                                // All crew members
                                sampleMovie.credits.crew
                                    // filter for only diretor
                                    .filter(item => item.known_for_department === 'Directing')
                                    // sort by popularity in descending order 
                                    .sort((a, b) => b.popularity - a.popularity)
                                    // return most popular
                                    .map((person, index) => {
                                        if (index === 0) {
                                            return (<p className={ styles.job_desc }
                                                key={ person.id }
                                            >{ person.name }</p>)
                                        }
                                    })
                            }
                        </div>

                        <div className={ styles.job }>
                            <h4 className={ styles.job_title }>Writer</h4>
                            {
                                // All crew members
                                sampleMovie.credits.crew
                                    // filter for only diretor
                                    .filter(item => item.known_for_department === 'Writing')
                                    // sort by popularity in descending order 
                                    .sort((a, b) => b.popularity - a.popularity)
                                    // return most popular
                                    .map((person, index) => {
                                        if (index === 0) {
                                            return (<p className={ styles.job_desc }
                                                key={ person.id }
                                            >{ person.name }</p>)
                                        }
                                    })
                            }
                        </div>

                    </div>
                </div>
            </div>

            <section className={ styles.moreDetailsSection }>
                <section className={ styles.mainMore }>
                    <div className={ styles.videos }>
                        <h4 className={ styles.crew_title }> Official Trailer </h4>
                        <div className={ styles.trailer }>
                            <iframe
                                className={ `${styles.frame} frame` }
                                src={ `https://www.youtube.com/embed/${trailerId}` }
                                title="How Spider-Verse Broke The Rules of 3D Animation"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    <div className={ styles.cast }>
                        <h4 className={ styles.cast_title }>Cast</h4>
                        <div className={ styles.castGrid }>
                            {
                                sampleMovie.credits.cast.map((actor, index) => {
                                    if (index < castAmt) {
                                        return (
                                            <Actor
                                                className={ styles.actorCard }
                                                key={ actor.cast_id }
                                                { ...actor }
                                            />
                                        )
                                    }
                                })
                            }
                        </div>
                        { castAmt < sampleMovie.credits.cast.length &&
                            <CustomButton
                                label={ 'Load more' }
                                handleClick={ () => {
                                    setCastAmt(prev => prev + 5)
                                } }
                                customStyle={ styles.loadMore }
                                filled
                            />
                        }
                    </div>

                    <div className={ styles.crew }>
                        <h4 className={ styles.crew_title }>Crew</h4>
                        <div className={ styles.crewGrid }>
                            {
                                sampleMovie.credits?.crew.map((member, index) => {
                                    if (index < crewAmt) {
                                        return (
                                            <Member
                                                className={ styles.Card }
                                                key={ member.credit_id }
                                                { ...member }
                                                openImg={ false }
                                            />
                                        )
                                    }
                                })
                            }
                        </div>
                        { crewAmt < sampleMovie.credits.cast.length &&
                            <CustomButton
                                label={ 'Load more' }
                                handleClick={ () => {
                                    setCrewAmt(prev => prev + 5)
                                } }
                                customStyle={ styles.loadMore }
                                filled
                            />
                        }
                    </div>



                </section>
                <aside className={ styles.sideMore }>
                    <h4 className={ styles.aside_title }>Original Title</h4>
                    <p className={ styles.aside_desc }>{ sampleMovie.original_title }</p>

                    <h4 className={ styles.aside_title }>Status</h4>
                    <p className={ styles.aside_desc }>{ sampleMovie.status }</p>

                    <h4 className={ styles.aside_title }>Original Language</h4>
                    <p className={ styles.aside_desc }>{ langToStr(sampleMovie.original_language) }</p>

                    <h4 className={ styles.aside_title }>Budget</h4>
                    <p className={ styles.aside_desc }>{ sampleMovie.budget ? `$${sampleMovie.budget.toLocaleString()}` : '-' }</p>

                    <h4 className={ styles.aside_title }>Revenue</h4>
                    <p className={ styles.aside_desc }>{ sampleMovie.revenue ? `$${sampleMovie.revenue.toLocaleString()}` : '-' }</p>

                    <h4 className={ styles.aside_title }>Keywords</h4>
                    <div className={ styles.aside_desc_btns }>{
                        sampleMovie
                            .keywords
                            .keywords.map(word => (
                                <CustomButton
                                    customStyle={ styles.keywords }
                                    label={ word.name }
                                    key={ word.id }
                                    id={ word.id }
                                    handleClick={
                                        console.log('open page that fetches with id')
                                    }
                                />
                            )) }
                    </div>
                </aside>
            </section>

            <section className={ styles.similarMoviesContainer }>
                <div className={ styles.similarMovies }>
                    {
                        sampleMovie.similar?.results.map((mov, index) => {
                            if (index < 6) {
                                return (
                                    <MovieCard
                                        key={ mov.id }
                                        { ...mov }
                                    />
                                )
                            }
                        })
                    }
                </div>
            </section>
        </Page >

    )
}
export default Details