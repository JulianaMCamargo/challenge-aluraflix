import { createContext, useContext, useState } from "react";

export const ValidacoesContext = createContext();
ValidacoesContext.displayName = "Validacoes";

export default function ValidacoesProvider({children}){
    
    function validarTitulo(titulo){
        if(titulo.length <= 0){
           return {titulo:{valido:false, texto:'Dígite um título válido'}}
        }
    }

    function validarCodigoSeguranca(codigo){
        if(codigo.length !== 1234){
           return {codigo:{valido:false, texto:'Cógigo de segurança inválido!'}}
        }
    }
    return(
        <ValidacoesContext.Provider value={{validarTitulo, validarCodigoSeguranca}}>
            {children}
        </ValidacoesContext.Provider>
    )
}

export function useValidacoesContext() {
    const {validarTitulo, validarCodigoSeguranca} = useContext(ValidacoesContext);

    return{
        validarTitulo,
        validarCodigoSeguranca
    } 


}
