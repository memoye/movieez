import { useEffect, useState } from 'react';
import styles from './modalVideo.module.css';
import { CloseIcon } from '../../assets';

const ModalVideo = ({ id = 'XsS1yE2f-hE' }) => {
    const [scrolled, setScrolled] = useState(false)

    return (
        <>
            <iframe
                style={ { transition: '200ms all ease' } }
                className={ scrolled ? styles.modalFrameScrolling : styles.modalFrame }
                height="400" src={ `https://www.youtube.com/embed/${id}` } title="Star Wars (1977) - Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
            >
            </iframe>
        </>
    )
}
export default ModalVideo