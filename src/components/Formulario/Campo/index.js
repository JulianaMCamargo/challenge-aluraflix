import './Campo.css'

//let valor = '';
//const [valor, setValor] = useState ('Guilherme Silveira') => ao invés de um let usaremos um hook (um gancho). É algo que o React nos entrega para que seja possível manter um estado dentro de uma função.
const Campo = ({label, valor, obrigatorio=false, placeholder, aoAlterado, type ='text'}) => {
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type}
                value={valor} 
                onChange = {aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default Campo;