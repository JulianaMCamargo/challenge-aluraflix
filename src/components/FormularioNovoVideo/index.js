import { Button } from '@mui/material';
import CampoTexto from '../Formulario/CampoTexto';
import ListaSuspensa from '../Formulario/ListaSuspensa';
import styles from './FormularioNovoVideo.module.css';
import AreaTexto from '../Formulario/AreaTexto';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Titulo from 'components/Formulario/Titulo';
import FormularioPadrao from 'components/Formulario/FormularioPadrao';
import { useVideosContext } from 'context/Videos';

function FormularioNovoVideo() {

    const [titulo, setTitulo] = useState('');
    const [linkVideo, setLinkVideo] = useState('');
    const [linkImagem, setLinkImagem] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [senha, setSenha] = useState('');

    const {adicionarVideo} = useVideosContext();

    const aoSalvar = (evento) => {
        evento.preventDefault()
        const novoVideo = {
            titulo,
            linkVideo,
            linkImagem,
            categoria,
            descricao,
        }

        adicionarVideo(novoVideo);

        setTitulo('')
        setLinkVideo('')
        setLinkImagem('')
        setCategoria('')
        setDescricao('')
        setSenha('')
    }

    const aoLimpar = (evento) => {
        evento.preventDefault();

        setTitulo('')
        setLinkVideo('')
        setLinkImagem('')
        setCategoria('')
        setDescricao('')
        setSenha('') 
    }

    return (
        <FormularioPadrao >
            <Titulo>Novo Vídeo</Titulo>

            <CampoTexto
                titulo='Título'
                valor={titulo}
                aoAlterado={valor => setTitulo(valor)}
            />

            <CampoTexto
                titulo='Link do vídeo'
                valor={linkVideo}
                aoAlterado={valor => setLinkVideo(valor)}
            />

            <CampoTexto
                titulo='Link da imagem do vídeo'
                valor={linkImagem}
                aoAlterado={valor => setLinkImagem(valor)}
            />

            <ListaSuspensa
                titulo="Categoria"
                valor={categoria}
                aoAlterado={valor => setCategoria(valor)}
            />

            <AreaTexto
                titulo='Descrição'
                valor={descricao}
                aoAlterado={valor => setDescricao(valor)}
            />

            <CampoTexto
                titulo='Código de segurança'
                valor={senha}
                aoAlterado={setSenha}
            />

            <div className={styles.botoes}>
                <div className={styles.botoesVideos}>
                    <Button variant="outlined" color='primary' onClick={aoSalvar}>
                        Salvar
                    </Button>

                    <Button variant="outlined" color='primary' onClick={aoLimpar}>
                        Limpar
                    </Button>
                </div>

                <Link to="/nova-categoria">
                    <Button  variant="outlined" color='primary'>Nova Categoria</Button>
                </Link>
            </div>


        </FormularioPadrao>
    )
}

export default FormularioNovoVideo;