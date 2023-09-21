import { Link } from 'react-router-dom';
import styles from './TituloCategoria.module.css';

function TituloCategorias({ children, cor, tamanho }) {
    const estiloCategoria = {
        backgroundColor: cor,
        fontSize: tamanho,
    };

    return (
        <div className={styles.categorias} style={estiloCategoria}>
            {children}
        </div>
    )
}

export default TituloCategorias;