import { createContext, useContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export const CategoriasContext = createContext();
CategoriasContext.displayName = 'Categorias';

const categoriaInicial = [
//     {
//         id: uuidv4(),
//         nome: 'Front-End',
//         descricao: 'Todos os vídeo da área de Front End juntarei nessa categoria para organizar os estudos que venho fazendo atualmente',
//         cor: '#82CFFA',
//     },
//     {
//         id: uuidv4(),
//         nome: 'Back-End',
//         descricao: 'Todos os vídeo que estou usando para estudar Back End ',
//         cor: '#69953b',
//     },
//     {
//         id: uuidv4(),
//         nome: 'Data Science',
//         descricao: 'Coisas de R e Python que venho aprendendo',
//         cor: '#A6D157',
//     },
//     {
//         id: uuidv4(),
//         nome: 'Devops',
//         descricao: 'Tudo que estou aprendendo sobre Docker e muito mais',
//         cor: '#E06B69',
//     },
//     {
//         id: uuidv4(),
//         nome: 'UX e Design',
//         descricao: 'Ferramentas e técnicas que estudo sobre UX e Design',
//         cor: '#D86EBF',
//     },
//     {
//         id: uuidv4(),
//         nome: 'Mobile',
//         descricao: 'Conteúdo que venho estudando sobre React Native e Flutter',
//         cor: '#FEBA05',
//     },
//     {
//         id: uuidv4(),
//         nome: 'Inovação e Gestão',
//         descricao: 'Como manter o time feliz e muito mais',
//         cor: '#FF8A29',
//     }

]


export default function CategoriasProvider({ children }) {
    const [categorias, setCategorias] = useState(categoriaInicial);
    const [categoriaEditada, setCategoriaEditada] = useState();

    const endpointDaApi = 'https://651b20b1194f77f2a5ae4300.mockapi.io/Categorias';

    useEffect(() => {
        async function listarCategorias() {
            try {
                const resposta = await fetch(endpointDaApi)
                if (!resposta.ok) {
                    throw new Error('Erro ao buscar categoria.');
                }
                const dados = await resposta.json();
                setCategorias(dados);

            } catch (erro) {
                console.error(erro);
            }
        }

        listarCategorias();
    }, []);

    async function adicionarCategoria(novaCategoria) {
        const resposta = await fetch(endpointDaApi, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(novaCategoria)
        });

        if (!resposta.ok) {
            throw new Error('Erro ao adicionar vídeo.');
        }

        const dados = await resposta.json();
        setCategorias([...categorias, dados]);
    }

    function editarCategoria(categoria) {
        setCategoriaEditada(categorias.find(c => c.id === categoria.id || null));
    }

    function deletarCategoria(categoria) {
        setCategorias(categorias.filter(c => c.id !== categoria.id));
    }

    return (
        <CategoriasContext.Provider value={{ categorias, setCategorias, categoriaEditada, setCategoriaEditada, adicionarCategoria, editarCategoria, deletarCategoria}}>
            {children}
        </CategoriasContext.Provider>
    )
}

export function useCategoriasContext() {
    return useContext(CategoriasContext);
}
