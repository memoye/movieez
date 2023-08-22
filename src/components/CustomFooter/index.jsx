import { heart } from "../../assets"
import styles from './customFooter.module.css';


const CustomFooter = () => {
    return (
        <footer className={ `${styles.footer}` }>
            <div className={ styles.footerContent }>
                <p className={ styles.footerText }>Made by Memoye with <span> <img src={ heart } alt="love" /></span>.</p>
                <div className={ styles.footerIcons }>

                </div>
            </div>
        </footer>
    )
}
export default CustomFooter