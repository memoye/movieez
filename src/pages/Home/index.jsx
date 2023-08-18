import styles from './home.module.css'
import poster from '../../assets/backgrounds/posterBg.webp';
import spiderman from '../../assets/spiderman.jpg'
import { CustomButton } from '../../components';
import { BsPlay } from 'react-icons/bs'

const Home = () => {
    return (
        <main className={ styles.Home }>

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
                            <h1 className={ styles.heroTitle }>{ 'Spider-man: Across the spider-verse' }</h1>
                            <p className={ styles.heroDesc }> After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse's very existence...</p>
                            <div className={ styles.heroCTA }>
                                <CustomButton
                                    label={ 'My Button' }
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

        </main>
    )
}
export default Home