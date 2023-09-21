import CampoTexto from '../CampoTexto';
import styles from './FormularioNovoVideo.module.css';

function FormularioNovoVideo(){
    return(
        <form className={styles.container}>
            <CampoTexto titulo='Título' />
            <CampoTexto titulo='Link do vídeo' />
            <CampoTexto titulo='Link da imagem do vídeo' />

        </form>
    )
}

export default FormularioNovoVideo;