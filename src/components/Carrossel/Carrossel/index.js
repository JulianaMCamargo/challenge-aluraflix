import styles from './Carrossel.module.css';
import Sliders from '../Sliders';
import TituloCategorias from 'components/TituloCategoria';

function Carrossel() {
    return (
        <section className={styles.container}>
            <div className={styles.texto}>
                <TituloCategorias cor="var(--cor-data-science)" tamanho='35px'>Data Science</TituloCategorias>
                <h2>Formação Data Science na alura</h2>
            </div>
            
            <Sliders />
        </section>
    )
}

export default Carrossel;