import styles from './home.module.css'
import poster from '../../assets/backgrounds/posterBg.webp';

const Home = () => {
    return (
        <main className={ styles.Home }>
            <section style={ { background: `url(${poster}) no-repeat top center / cover` } } className={ styles.heroContainer }>
                <section className={ styles.hero }>
                    <div className={ styles.heroContent }>
                        <article className={ styles.heroText }>
                            <h1 className={ styles.heroTitle }>{ 'Spider-man: Into the spider-verse' }</h1>
                            <p className={ styles.heroDesc }></p>
                            <div className={ styles.heroCTA }></div>
                        </article>
                        <div className={ styles.heroImg }>

                        </div>
                    </div>

                </section>

            </section>
            repudiandae. Error placeat dolores culpa, enim dicta libero obcaecati aliquid vero porro illum labore iure fugit ducimus quisquam ullam, inventore sapiente dolorem neque velit nisi minima quam laboriosam. Dolore qui consequatur distinctio exercitationem, sequi quibusdam at, provident ut, voluptatem neque rerum aliquam quo labore nam. A rerum assumenda voluptatum labore quisquam in dolores ullam odit, dignissimos nulla deleniti suscipit. Aperiam minima tenetur aut dolorum, rem ullam ab at perspiciatis assumenda, iste vero neque omnis dolores illum corrupti reprehenderit, tempora consectetur accusamus modi porro aliquid quis officiis cum. Adipisci doloribus molestias voluptate! Obcaecati veniam perspiciatis libero cupiditate explicabo delectus neque at quidem id. Tempora ipsum dicta totam voluptas.
        </main>
    )
}
export default Home