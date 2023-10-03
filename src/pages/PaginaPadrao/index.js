import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import CategoriasProvider from "context/Categorias";
import ValidacoesProvider from "context/Validacoes";
import VideosProvider from "context/Videos";
import { Outlet } from "react-router-dom";

function PaginaPadrao() {

    return (
        <>
            <Cabecalho />
            <ValidacoesProvider>
                <VideosProvider>
                    <CategoriasProvider>
                        <Outlet />
                    </CategoriasProvider>
                </VideosProvider>
            </ValidacoesProvider>
            <Rodape />
        </>

    )
}

export default PaginaPadrao;