import styles from './Cabecalho.module.css';
import { Link } from 'react-router-dom';
import { Button, createTheme} from '@mui/material';


function Cabecalho() {
    
    const theme = createTheme({
        palette: {
          primary: {
            main: '#DB202C',
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          },
          secondary: {
            main: '#DB202C',
            light: '#F5EBFF',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#47008F',
          },
        },
      });

    return (
        <header className={styles.cabecalho}>
            <Link to='/'>
                <a href="https://fontmeme.com/netflix-font/">
                    <img src="https://fontmeme.com/permalink/230918/a237d7f5d7c8ecf6b24e2c8e3a97f47f.png"
                        alt="netflix-font"
                        border="0" />
                </a>
            </Link>
            <Button variant="outlined" color='primary'>Novo vídeo</Button>
        </header>
    )
}

export default Cabecalho;