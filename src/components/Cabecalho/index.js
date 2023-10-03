import styles from './Cabecalho.module.css';
import { Link } from 'react-router-dom';
import { Button, createTheme } from '@mui/material';
import logo from 'images/logo-leandro.png'


function Cabecalho() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#DB202C',
      },
      secondary: {
        main: '#DB202C',
        light: '#F5EBFF',
        contrastText: '#47008F',
      },
    },
  });

  return (
    <header className={styles.cabecalho}>

      <Link to='/'>
        <img src={logo} alt='Logo do Leandroflix' />
      </Link>

      <Link to='/novo-video'>
        <Button variant="outlined" color='primary'>
          Novo vídeo
        </Button>
      </Link>

    </header>
  )
}

export default Cabecalho;