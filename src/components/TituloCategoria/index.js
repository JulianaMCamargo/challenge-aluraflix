import styles from './TituloCategoria.module.css';

function TituloCategorias({ children, corDeFundo, tamanho }) {

    const estiloCategoria = {
        backgroundColor: corDeFundo,
        fontSize: tamanho,
    };

    return (
        <div className={styles.categorias} style={estiloCategoria}>
            {children}
        </div>
    )
}

export default TituloCategorias;