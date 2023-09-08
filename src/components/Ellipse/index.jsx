import { useEffect, useRef, useState } from 'react'
import styles from './ellipse.module.css'

const Ellipse = ({ onClick, height = 3, color = '#fff', gap = 2 }) => {
    // const [hovered, setHovered] = useState(false)
    const ellipse = useRef(null)

    // useEffect(() => {
    //     ellipse.current.addEventListener('mouseenter', () => {
    //         setHovered(true)
    //     })
    //     ellipse.current.addEventListener('mouseleave', () => {
    //         setHovered(false)
    //     })
    // }, [])

    const getContent = () => {
        // if (!hovered) {
        return (<span
            style={ { gap: `${gap}px` } }
            title='More info'
            className={ styles.dots }>
            <span
                style={ {
                    height: `${height}px`,
                    background: `${color}`
                } }
                className={ `${styles.dot} ${styles.dot1}` }></span>
            <span
                style={ {
                    height: `${height}px`,
                    background: `${color}`
                } }
                className={ `${styles.dot} ${styles.dot2}` }></span>
            <span
                style={ {
                    height: `${height}px`,
                    background: `${color}`
                } }
                className={ `${styles.dot} ${styles.dot3}` }></span>
        </span>)
        // }
        // else {
        //     return (
        //         <button className={ styles.more }>See more</button>
        //     )
        // }
    }

    return (
        <span

            // ref={ ellipse }
            onClick={ onClick && onClick }
            className={ styles.ellipse } >
            {
                getContent()
            }
        </span >
    )
}
export default Ellipse