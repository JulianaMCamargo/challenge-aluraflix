import { Link } from 'react-router-dom';
import styles from './Categorias.module.css';

function Categorias({children}) {
    return(
        <Link to="#" className={styles.categorias}>
            {children}
        </Link>
    )
}

export default Categorias;