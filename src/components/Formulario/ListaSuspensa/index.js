import styles from './ListaSuspensa.module.css'
import { useCategoriasContext } from "context/Categorias";

function ListaSuspensa({ aoAlterado }) {

    const {categorias} = useCategoriasContext();
    
    return (
        <div className={styles.listaSuspensa}>
            <select onChange={evento => aoAlterado(evento.target.value)}>
                <option value={""}></option>
                {categorias.map((categoria) => (
                    <option key={categoria.nome} value={categoria.nome}>
                        {categoria.nome}
                    </option>
                ))}
            </select>

        </div>
    )
}

export default ListaSuspensa;
