import styles from './Sliders.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import VideoCard from '../VideoCard';
import { useVideosContext } from 'context/Videos';

function Sliders ({videosFiltrados}) {
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
    };

    return (
        
        <div className={styles.slider}>
            <Slider {...settings}>
                {videosFiltrados.map((video) => (
                    <div key={video.id} className={styles.card}>
                        <VideoCard
                            id={video.id}
                            capa={video.linkImagem}
                            descricao={video.descricao}
                            link={video.linkVideo}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )

}

export default Sliders; 