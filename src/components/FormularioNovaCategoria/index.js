import { useState } from 'react';
import styles from './FormularioNovaCategoria.module.css';
import CampoTexto from 'components/Formulario/CampoTexto';
import Titulo from 'components/Formulario/Titulo';
import FormularioPadrao from 'components/Formulario/FormularioPadrao';
import AreaTexto from 'components/Formulario/AreaTexto';
import Campo from 'components/Formulario/Campo';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Tabela from 'components/Formulario/Tabela';
import { useCategoriasContext } from 'context/Categorias';
import Botao from 'components/Botao';

function FormularioNovaCategoria() {
    const [nome, setNomeCategoria] = useState('');
    const [cor, setCorCategoria] = useState('#000000');
    const [descricao, setDescricaoCategoria] = useState('');
    const [senha, setSenha] = useState('');

    const { categoriaEditada, adicionarCategoria } = useCategoriasContext();

    const aoSalvar = (evento) => {
        evento.preventDefault()
        const novaCategoria = {
            nome,
            descricao,
            cor
        }
        console.log(novaCategoria)

        adicionarCategoria(novaCategoria);
        console.log(novaCategoria)

        setNomeCategoria('')
        setDescricaoCategoria('')
        setCorCategoria('#000000')
    }

    const aoLimpar = (evento) => {
        evento.preventDefault();

        setNomeCategoria('')
        setDescricaoCategoria('')
        setCorCategoria('#000000')
    }


    return (
        <>
            <FormularioPadrao onSubmit={aoSalvar}>
                <Titulo>Nova Categoria</Titulo>

                <CampoTexto
                    titulo='Nome'
                    valor={categoriaEditada ? categoriaEditada.nome : nome}
                    aoAlterado={valor => setNomeCategoria(valor)}
                />

                <AreaTexto
                    titulo='Descrição da categoria'
                    valor={categoriaEditada ? categoriaEditada.descricao : descricao}
                    aoAlterado={valor => setDescricaoCategoria(valor)}
                />

                <Campo
                    obrigatorio
                    type="color"
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={categoriaEditada ? categoriaEditada.cor : cor}
                    aoAlterado={valor => setCorCategoria(valor)}
                />

                <CampoTexto
                    titulo='Código de segurança'
                    valor={senha}
                    aoAlterado={setSenha}
                />

                <div className={styles.botoesVideos}>
                    <Button variant="outlined" color='primary' onClick={aoSalvar}>
                        Salvar
                    </Button>

                    <Button variant="outlined" color='primary' onClick={aoLimpar}>
                        Limpar
                    </Button>
                </div>

            </FormularioPadrao>

            <Tabela />
        </>
    )
}

export default FormularioNovaCategoria; 