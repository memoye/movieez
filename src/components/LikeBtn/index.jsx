import { useState } from "react"
import styles from './likeBtn.module.css'

const LikeBtn = ({ className, onClick }) => {
    const [isFav, setIsFav] = useState(false)

    return (
        <button
            className={
                `${styles.heart} 
                        ${styles.hoverBtn} 
                        ${isFav && styles.fav}
                        ${className}
                        `
            }
            onClick={ () => {
                setIsFav(prev => !prev)
            } }
        ></button>
    )
}
export default LikeBtn