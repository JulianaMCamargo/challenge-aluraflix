import { useCategoriasContext } from 'context/Categorias';
import styles from './Tabela.module.css';

function Tabela() {
    const { categorias, editarCategoria, deletarCategoria } = useCategoriasContext();

    return (
        <div className={styles.container}>
            <table className={styles.tabela}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Editar</th>
                        <th>Remover</th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map((categoria) => (
                        <tr key={categoria.id} value={categoria.id}>
                            <th>{categoria.nome}</th>
                            <th>{categoria.descricao}</th>
                            <th onClick={evento => editarCategoria(categoria)}>Editar</th>
                            <th onClick={evento => deletarCategoria(categoria)}>Remover</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Tabela;