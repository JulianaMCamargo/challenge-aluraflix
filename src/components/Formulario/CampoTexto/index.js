import { TextField } from "@mui/material";

function CampoTexto({ titulo }) {

    const customStyles = {
        backgroundColor: 'var(--preto-claro)', // Cor de preenchimento personalizada
        '& .MuiInputLabel-root': {
            color: 'var(--primaria-leandro)', // Cor do texto quando em foco (onBlur)
            borderColor: 'var(--primaria-leandro)',
        },
        '& .MuiInputLabel-outlined': {
            color: 'var(--primaria-leandro)', // Cor do texto quando não em foco (offBlur)
        },
    };

    return (
        <TextField
            id="filled-basic"
            label={titulo}
            ariant="filled"
            fullWidth
            sx={customStyles}
        />
    )
}

export default CampoTexto;