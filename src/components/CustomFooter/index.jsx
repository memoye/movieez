import { Link } from "react-router-dom";
import { heart } from "../../assets"
import styles from './customFooter.module.css';
import { github, x, linkedIn, medium } from '../../assets';

const CustomFooter = () => {
    return (
        <footer className={ `${styles.footer}` }>
            <div className={ styles.footerContent }>
                <p className={ styles.footerText }>Made by Memoye with <span> <img src={ heart } alt="love" /></span>.</p>
                <div className={ styles.socials }>
                    <Link to='/'>
                        <img src={ github } alt="gitHub" />
                    </Link>
                    <Link to='/'>
                        <img src={ x } alt="git hub" />
                    </Link>
                    <Link to='/'>
                        <img src={ linkedIn } alt="git hub" />
                    </Link>
                    <Link to='/'>
                        <img src={ medium } alt="git hub" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
export default CustomFooter