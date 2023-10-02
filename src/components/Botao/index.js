import './Botao.css'

const Botao = ({children, type}) => {
    return (
        <button className='botao' type={type}>
            {children}
        </button>
    )
}

export default Botao;