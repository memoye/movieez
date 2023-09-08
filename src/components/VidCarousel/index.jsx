import React, { useRef } from 'react';
import YouTube from 'react-youtube';
import styles from './vidCarousel.module.css'; // Import the CSS with the styles mentioned above

const VidCarousel = ({ videos }) => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft -= 300; // Adjust the scroll distance as needed
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += 300; // Adjust the scroll distance as needed
        }
    };

    return (
        <div className={ styles.carousel }>
            <div className={ styles.carousel_wrapper } ref={ carouselRef }>
                { videos.map((video) => (
                    <div className={ styles.carousel_item } key={ video.id }>
                        <div className={ styles.youtube_video_container }>
                            <YouTube
                                videoId={ video.id }
                                className={ styles.youtube_video }
                            />
                        </div>
                    </div>
                )) }
            </div>
            <button className={ `${styles.carousel_button} ${styles.left}` } onClick={ scrollLeft }>
                &lt;
            </button>
            <button className={ `${styles.carousel_button} ${styles.right}` } onClick={ scrollRight }>
                &gt;
            </button>
        </div>
    );
};

export default VidCarousel;
