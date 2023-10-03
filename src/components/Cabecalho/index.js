import styles from './Cabecalho.module.css';
import { Link } from 'react-router-dom';
import { Button, createTheme } from '@mui/material';
import logo from 'images/logo-leandro.png'


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
        <img src={logo} alt='Logo do Leandroflix' />
      </Link>
      <span style={{ cursor: 'not-allowed' }}>
        <Button component={Link} variant="outlined" color='primary'> 
          Novo vídeo
        </Button>
      </Link>

    </header>
  )
}

export default Cabecalho;