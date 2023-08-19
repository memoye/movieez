import styles from './home.module.css'
import poster from '../../assets/backgrounds/posterBg.webp';
import spiderman from '../../assets/spiderman.jpg'
import { CustomButton } from '../../components';
import { BsPlay, BsStar } from 'react-icons/bs'
import { google, fb, netflix, ms, spotify, yt } from '../../assets'

const Home = () => {
    return (
        <main className={ styles.home }>

            <section
                style={ {
                    background: `linear-gradient(to right,
                        rgba(0, 0, 0, 0.6), 
                        rgba(0, 0, 0, 0.1)
                      ), url(${poster}) no-repeat top center / cover`
                } }
                className={ styles.heroContainer }>

                <section className={ styles.hero }>
                    <div className={ styles.heroContent }>
                        <article className={ styles.heroText }>
                            <div>
                                <h1 className={ styles.heroTitle }>{ 'Spider-man: Across the spider-verse' }</h1>
                                <p className={ styles.heroDesc }> After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse's very existence...</p>
                                <div className={ styles.meta }>
                                    <BsStar className={ styles.ratingIcon } /> { '7.8' } Rating | { "Sci-Fi, Adventure, Action" } | { '2023' }
                                </div>
                            </div>

                            <div className={ styles.heroCTA }>
                                <CustomButton
                                    label={ 'Watch Movie' }
                                    handleClick={ (workin) => { console.log(workin) } }
                                    icon={ <BsPlay /> }
                                    filled={ true }
                                />
                                <CustomButton
                                    label={ 'Watch Trailer' }
                                    handleClick={ (workin) => { console.log(workin) } }
                                    icon={ <BsPlay /> }

                                />
                            </div>
                        </article>

                        <div className={ styles.heroImg }>
                            <img src={ spiderman } alt="movie poster" />
                        </div>
                    </div>

                </section>

            </section>
            <section className={ styles.affiliates }>
                <h3 className={ styles.affiliatesTitle }>{ "Trusted by companies around the world!" }</h3>
                <div className={ styles.companies }>
                    <div className={ styles.companyLogos }>
                        <img src={ google } alt={ 'google' } />
                        <img src={ fb } alt={ 'facebook' } />
                        <img src={ netflix } alt={ 'netflix' } />
                        <img src={ spotify } alt={ 'spotify' } />
                        <img src={ ms } alt={ 'microsoft' } />
                        <img src={ yt } alt={ 'youtube' } />
                        <img src={ google } alt={ 'google' } />
                        <img src={ fb } alt={ 'facebook' } />
                        <img src={ netflix } alt={ 'netflix' } />
                    </div>
                    <div className={ styles.companyLogos }>
                        <img src={ google } alt={ 'google' } />
                        <img src={ fb } alt={ 'facebook' } />
                        <img src={ netflix } alt={ 'netflix' } />
                        <img src={ spotify } alt={ 'spotify' } />
                        <img src={ ms } alt={ 'microsoft' } />
                        <img src={ yt } alt={ 'youtube' } />
                        <img src={ google } alt={ 'google' } />
                        <img src={ fb } alt={ 'facebook' } />
                        <img src={ netflix } alt={ 'netflix' } />
                    </div>
                </div>

                <div className={ styles.companies }>
                    <div className={ `${styles.companyLogos} ${styles.reverse}` }>
                        <img src={ google } alt={ 'google' } />
                        <img src={ fb } alt={ 'facebook' } />
                        <img src={ netflix } alt={ 'netflix' } />
                        <img src={ spotify } alt={ 'spotify' } />
                        <img src={ ms } alt={ 'microsoft' } />
                        <img src={ yt } alt={ 'youtube' } />
                        <img src={ google } alt={ 'google' } />
                        <img src={ fb } alt={ 'facebook' } />
                        <img src={ netflix } alt={ 'netflix' } />
                    </div>
                    <div className={ `${styles.companyLogos} ${styles.reverse}` }>
                        <img src={ google } alt={ 'google' } />
                        <img src={ fb } alt={ 'facebook' } />
                        <img src={ netflix } alt={ 'netflix' } />
                        <img src={ spotify } alt={ 'spotify' } />
                        <img src={ ms } alt={ 'microsoft' } />
                        <img src={ yt } alt={ 'youtube' } />
                        <img src={ google } alt={ 'google' } />
                        <img src={ fb } alt={ 'facebook' } />
                        <img src={ netflix } alt={ 'netflix' } />
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Home