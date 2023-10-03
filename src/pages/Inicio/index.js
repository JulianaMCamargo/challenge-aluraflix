import Carrossel from 'components/Carrossel/Carrossel';
import styles from './Inicio.module.css'
import Banner from 'components/Banner';
import { useCategoriasContext } from 'context/Categorias';

function Inicio() {
    const {categorias} = useCategoriasContext();

    return (
        <>
            <Banner />
            <section className={styles.container}>
                {categorias.map((categoria) => (
                    <Carrossel
                        titulo={categoria.nome}
                        cor={categoria.cor}
                        descricao={categoria.descricao}
                        key={categoria.id}
                    />
                ))}
            </section>
        </>
    )
}

export default Inicio; 