import styles from './FormularioPadrao.module.css';

function FormularioPadrao({children}){
    return(
        <form className={styles.container}>
            {children}
        </form>
    )
}

export default FormularioPadrao;