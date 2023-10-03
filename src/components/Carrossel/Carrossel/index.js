import styles from './Carrossel.module.css';
import Sliders from '../Sliders';
import TituloCategorias from 'components/TituloCategoria';
import { useVideosContext } from 'context/Videos';

function Carrossel({ titulo, cor, descricao }) {

    const { videos } = useVideosContext();

    const videosFiltrados = videos.filter(video => video.categoria === titulo);

    if(videosFiltrados.length === 0) {
        return null;
    }

    return (
        <section className={styles.container}>
            <div className={styles.texto}>
                <TituloCategorias corDeFundo={cor} tamanho='35px'>{titulo}</TituloCategorias>
                <h2>{descricao}</h2>
            </div>

            <Sliders videosFiltrados={videosFiltrados} />
        </section>
    )


}


export default Carrossel;