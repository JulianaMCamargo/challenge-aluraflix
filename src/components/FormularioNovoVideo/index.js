import { Button } from '@mui/material';
import CampoTexto from '../Formulario/CampoTexto';
import ListaSuspensa from '../Formulario/ListaSuspensa';
import styles from './FormularioNovoVideo.module.css';
import AreaTexto from '../Formulario/AreaTexto';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import Titulo from 'components/Formulario/Titulo';
import FormularioPadrao from 'components/Formulario/FormularioPadrao';
import { useVideosContext } from 'context/Videos';
import { ValidacoesContext, useValidacoesContext } from 'context/Validacoes';

function FormularioNovoVideo() {

    const [titulo, setTitulo] = useState('');
    const [linkVideo, setLinkVideo] = useState('');
    const [linkImagem, setLinkImagem] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [senha, setSenha] = useState('');

    const [erros, setErros] = useState(
        { titulo: { valido: true, texto: '' } },
        { codigo: { valido: true, texto: '' } }
    );

    const { adicionarVideo } = useVideosContext();
    const { validarTitulo, validarCodigoSeguranca } = useValidacoesContext();

    const aoSalvar = () => {
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

    function possoSalvar() {
        for (let campo in erros) {
            if (!erros[campo].valido) {
                return false;
            }
        }
        return true;
    }

    return (
        <FormularioPadrao >
            <Titulo>Novo Vídeo</Titulo>

            <CampoTexto
                type="text"
                titulo='Título'
                valor={titulo}
                onBlur={valor => setErros(validarTitulo(valor))}
                aoAlterado={valor => setTitulo(valor)}
                error={!erros.titulo.valido}
                helperText={erros.titulo.texto}
                required
            />

            <CampoTexto
                type="url"
                titulo='Link do vídeo'
                valor={linkVideo}
                aoAlterado={valor => setLinkVideo(valor)}
                required
            />

            <CampoTexto
                type="url"
                titulo='Link da imagem do vídeo'
                valor={linkImagem}
                aoAlterado={valor => setLinkImagem(valor)}
                required
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
                onBlur={valor => setErros(validarCodigoSeguranca(valor))}
                aoAlterado={setSenha}
                required
                maxlength='8'
            />

            <div className={styles.botoes}>
                <div className={styles.botoesVideos}>
                    <Button variant="outlined" color='primary'
                        onClick={(event) => {
                            event.preventDefault();
                            if (possoSalvar) {
                                aoSalvar();
                            }
                        }}>
                        Salvar
                    </Button>

                    <Button variant="outlined" color='primary' onClick={aoLimpar}>
                        Limpar
                    </Button>
                </div>

                <Link to="/nova-categoria">
                    <Button variant="outlined" color='primary'>Nova Categoria</Button>
                </Link>
            </div>


        </FormularioPadrao>
    )
}

export default FormularioNovoVideo;