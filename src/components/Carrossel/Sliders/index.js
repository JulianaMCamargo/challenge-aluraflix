import styles from './Sliders.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import VideoCard from '../VideoCard';

function Sliders() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    return (
        <div className={styles.slider}>
            <Slider {...settings}>
                <div>
                    <VideoCard />
                </div>
                <div>
                    <VideoCard />
                </div>
                <div>
                    <VideoCard />
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    )
}

export default Sliders; 