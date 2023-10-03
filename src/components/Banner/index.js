import { Link } from 'react-router-dom';
import styles from './Banner.module.css'
import banner from './card-leandro-06.jpeg'
import TituloCategorias from 'components/TituloCategoria';

function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.conteudo}>

                <div className={styles.descricao}>
                    <TituloCategorias corDeFundo="var(--primaria-leandro)" tamanho='60px'>HIIT</TituloCategorias>
                    <h1>Solta 21 minutos no cronômetro</h1>
                    <p>Faça
                        10 afundos cada perna, <br/>
                        10 agachamentos abre e fecha<br/>
                        10 Corridas no lugar<br/>
                        <br/>
                        Repete o máximo de Rounds que conseguir até completar o tempo
                    </p>
                </div>

                <Link to='https://www.instagram.com/p/CxqbqxDr5BN/' className={styles.video}>
                    <img src={banner} alt='Video...' />
                </Link>

            </div>
        </section>
    )
    //preciso que esse banner seja automatizado, mas com o que?
}

export default Banner; 