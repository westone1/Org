import "./campo.css"
import { useState } from "react"


function Campo (props){
 
    const placeholdermodificado = `${props.placeholder}...`
//DESTRUCTURACION
const {type="text"} = props
    

    const manejarcambio = (e)=>{
        props.actualizarValor(e.target.value)
    }

   return <div className={`campo campo-${type}`}> 
        <label>{props.titulo}</label>
        <input 
        required={props.required} 
        placeholder={placeholdermodificado} 
        value={props.valor}
        onChange={manejarcambio}
        type={type}
        ></input>
    </div>
    
}
export default Campo