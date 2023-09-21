import { Link } from 'react-router-dom';
import styles from './VideoCard.module.css';
import capa from 'images/card-leandro-01.jpeg'

function VideoCard() {
    return (
        <div className={styles.container}>
            <Link className={styles.link} to='#'>
                <img src={capa} alt='Treino de 20min' className={styles.capa} />
            </Link>
        </div>
    )
}

export default VideoCard;