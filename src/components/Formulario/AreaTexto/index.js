import styles from './AreaTexto.module.css'

function AreaTexto({titulo, valor, aoAlterado}) {
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
    }

    return (
        <textarea className={styles.textoArea}
            placeholder={titulo}
            value={valor}
            onChange={aoDigitado}
        />
    )
}

export default AreaTexto;