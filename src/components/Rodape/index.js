import styles from './Rodape.module.css'
import logo from 'images/logo-leandro.png'

function Rodape() {
    return(
        <footer className={styles.rodape}>
            <img src={logo} alt='Logo do Leandroflix' />
        </footer>
    )
}

export default Rodape;
