import { TextField } from "@mui/material";
import styles from './CampoTexto.module.css'

function CampoTexto({ titulo, valor, aoAlterado, type }) {
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
    }

    const customStyles = {
        backgroundColor: 'var(--cinza-preto)', // Cor de preenchimento personalizada
        color: 'var(--cinza-claro)',

        '& .MuiInputLabel-root': {
            color: 'var(--cinza-claro)', // Cor do texto quando em foco (onBlur)
            borderColor: 'var(--primaria-leandro)',
        },
        '& .MuiInputLabel-outlined': {
            color: 'var(--cinza-claro)', // Cor do texto quando não em foco (offBlur)
            borderColor: 'var(--primaria-leandro)',
        },
        '& .MuiInputLabel-filled': {
            color: 'var(--cinza-claro)', // Cor do texto quando não em foco (offBlur)
            borderColor: 'var(--primaria-leandro)',
        }
    };

    return (
        <TextField className={StyleSheet.container}
            id="filled-basic"
            label={titulo}
            value={valor}
            onChange={aoDigitado}
            variant="filled"
            fullWidth
            required
            type={type}
            InputProps={{
                sx: {
                    color: 'var(--cinza-claro)',
                    backgroundColor: 'var(--preto-claro)',
                    borderColor: 'var(--primaria-leandro)',
                }
            }} // Defina a cor do texto ao digitar
            InputLabelProps={{
                sx: {
                    color: 'var(--cinza-claro)', // Cor do texto quando em foco (onBlur)
                    borderColor: 'var(--primaria-leandro)',
                },
            }}
            sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: 'var(--primaria-leandro)', // Cor da borda durante a transição (em foco)
                },
              }}
        />
    )
}

export default CampoTexto;