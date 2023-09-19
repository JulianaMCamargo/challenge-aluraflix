import { Link } from 'react-router-dom';
import styles from './Banner.module.css'
import banner from './banner-player.png'
import Categorias from 'components/Categorias';

function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.conteudo}>
                
                <div className={styles.descricao}>
                    <Categorias>Front End</Categorias>
                    <h1>SEO com React</h1>
                    <p>Esse desafio é uma forma de aprendizado.
                        É um mecanismo onde você pode se engajar na resolução de um problema para poder
                        aplicar todo o conhecimento adquirido na Formação React.
                    </p>
                </div>

                <Link to='video' className={styles.video}>
                    <img src={banner} alt='Video...' />
                </Link>
                
            </div>
        </section>
    )
}

export default Banner; 