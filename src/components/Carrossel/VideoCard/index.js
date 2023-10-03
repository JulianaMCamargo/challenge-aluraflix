import { Link } from 'react-router-dom';
import styles from './VideoCard.module.css';

function VideoCard({id, capa, descricao, link}) {
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={link} key={id}>
                <img src={capa} alt={descricao} className={styles.capa} />
            </Link>
        </div>
    )
}

export default VideoCard;