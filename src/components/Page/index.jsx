import styles from './page.module.css'

const Page = ({ children, title, className }) => {
    return (
        <main className={ `${styles.main} ${className}` }>
            { title && (
                <div className={ styles.heading }>
                    <h1 className={ styles.h1 }>{ title }</h1>
                </div>)
            }
            { children }
        </main>
    )
}

export default Page