import styles from './Titulo.module.css';

function Titulo({children}){
    return(
        <h2 className={styles.titulo}>{children}</h2>
    )
}

export default Titulo;