import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const VideosContext = createContext();
VideosContext.displayName = 'Videos';


    const inicial = [
        {
            id: uuidv4(),
            titulo: "O labirinto do Logcat",
            linkVideo: "https://www.youtube.com/embed/ypvGqZGJBls",
            linkImagem: "https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img2.png",
            categoria: "Data Science",
            descricao: "Qualquer coisa"
        },
        {
            id: uuidv4(),
            titulo: "Um componente no espaço",
            linkVideo: "https://www.youtube.com/embed/jK0uiQ1ZQQQ",
            linkImagem: "https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img1.png",
            categoria: "Mobile",
            descricao: "Qualquer coisa"
        },
        {
            id: uuidv4(),
            titulo: "O poderoso JavaScript",
            linkVideo: "https://www.youtube.com/embed/N1BSG02z-Mw",
            linkImagem: "https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img4.png",
            categoria: "Devops",
            descricao: "Qualquer coisa"
        },
        {
            id: uuidv4(),
            titulo: "Dart, o Caçador de Andróides",
            linkVideo: "https://www.youtube.com/embed/LLmBWjF6F8M",
            linkImagem: "https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img3.png",
            categoria: "Data Science",
            descricao: "Qualquer coisa"
        }
    ]


export default function VideosProvider({ children }) {
    const [videos, setVideos] = useState(inicial);
    //const [videosFiltrados, setVideosFiltrados] = useState ();

    const adicionarVideo = (novoVideo) => {
        setVideos([...videos, { ...novoVideo, id: uuidv4() }])
    }

    const deletarVideo = (videoDeletado) => {
        let novaLista = [...videos];

        novaLista = videos.filter((video) => video.id !== videoDeletado.id);
        return setVideos(novaLista);
    }

    // const filtrarVideo = (categoriaFiltrada) => {
    //     setVideosFiltrados(videos.filter(video => video.categoria == categoriaFiltrada));
    // }

    return (
        <VideosContext.Provider value={{ videos, adicionarVideo, deletarVideo }}>
            {children}
        </VideosContext.Provider>
    )
}

export function useVideosContext() {
    return useContext(VideosContext);
    
}