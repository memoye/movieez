import { useState } from "react"
import styles from './actor.module.css'
import { base_img_url, getImage, sampleActor } from "../../utils"
import { noImg } from '../../assets'

const Actor = (props) => {
    const { profile_path, name, character, className } = props
    const [hovering, setHovering] = useState(true)


    return (
        <div className={ `${styles.actor} ${className}` }>
            <div className={ styles.actor_img }>
                { profile_path ? <img src={ getImage(profile_path) } alt={ name } /> : <img style={ { objectFit: 'fill' } } src={ noImg } alt={ 'No image found!' } /> }
            </div>
            <div className={ styles.desc }>
                <h4 className={ styles.name }>{ name } </h4>
                <p className={ styles.as }>as</p>
                <p className={ styles.role }> { character } </p>
            </div>
        </div>
    )
}

export default Actor