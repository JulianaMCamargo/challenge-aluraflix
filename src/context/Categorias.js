import { createContext, useContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export const CategoriasContext = createContext();
CategoriasContext.displayName = 'Categorias';

const categoriaInicial = [
    {
        id: uuidv4(),
        nome: 'Front-End',
        descricao: 'Todos os vídeo da área de Front End juntarei nessa categoria para organizar os estudos que venho fazendo atualmente',
        cor: '#82CFFA',
    },
    {
        id: uuidv4(),
        nome: 'Back-End',
        descricao: 'Todos os vídeo que estou usando para estudar Back End ',
        cor: '#69953b',
    },
    {
        id: uuidv4(),
        nome: 'Data Science',
        descricao: 'Coisas de R e Python que venho aprendendo',
        cor: '#A6D157',
    },
    {
        id: uuidv4(),
        nome: 'Devops',
        descricao: 'Tudo que estou aprendendo sobre Docker e muito mais',
        cor: '#E06B69',
    },
    {
        id: uuidv4(),
        nome: 'UX e Design',
        descricao: 'Ferramentas e técnicas que estudo sobre UX e Design',
        cor: '#D86EBF',
    },
    {
        id: uuidv4(),
        nome: 'Mobile',
        descricao: 'Conteúdo que venho estudando sobre React Native e Flutter',
        cor: '#FEBA05',
    },
    {
        id: uuidv4(),
        nome: 'Inovação e Gestão',
        descricao: 'Como manter o time feliz e muito mais',
        cor: '#FF8A29',
    }

]

export default function CategoriasProvider({ children }) {
    const [categorias, setCategorias] = useState(categoriaInicial);
    const [categoriaEditada, setCategoriaEditada] = useState();

    return (
        <CategoriasContext.Provider value={{ categorias, setCategorias, categoriaEditada, setCategoriaEditada }}>
            {children}
        </CategoriasContext.Provider>
    )
}

export function useCategoriasContext() {
    const { categorias, setCategorias } = useContext(CategoriasContext);
    const { categoriaEditada, setCategoriaEditada } = useContext(CategoriasContext);

    function adicionarCategoria(novaCategoria) {
        setCategorias([...categorias, { ...novaCategoria, id: uuidv4() }])
    }

    function editarCategoria(categoria) {
        setCategoriaEditada(categorias.find(c => c.id === categoria.id || null));
    }

    function deletarCategoria(categoria) {
        setCategorias(categorias.filter(c => c.id !== categoria.id));
    }
        return {
            categorias,
            categoriaEditada,
            adicionarCategoria,
            editarCategoria,
            deletarCategoria
        }
    }
