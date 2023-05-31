import "./formulario.css"
import Camponombre from "../campo/campo.js"
import ListaOpciones from "../lista-opciones/lista-opciones.js"
import Boton from "../boton/boton.js"
import { useState } from "react"

function Formulario(props){

    const [nombre,setnombre] = useState("");
    const [puesto,setpuesto] = useState("");
    const [foto,setfoto] = useState("");
    const [equipo,setequipo] = useState("");
    const [titulo,settitulo] = useState("");
    const [color,setcolor] = useState("");

    const {registrarColaborador,crearEquipo} = props

    const manejarenvio = (e) =>{
        e.preventDefault()
        console.log("manejarenvio",e)
        
        let enviardatos = {
            nombre,
            puesto,
            foto,
            equipo 
        }
        registrarColaborador(enviardatos)
    }

    const manejarNuevoEquipo = (e)=>{
        e.preventDefault()
        crearEquipo({titulo,colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarenvio}>
            <h2>Rellena el formulario para crear el colaborador:</h2>
            
            <Camponombre 
            titulo="Nombre" 
            placeholder="Ingresar Nombre" 
            required valor={nombre} 
            actualizarValor={setnombre}
            />

            <Camponombre 
            titulo="Puesto"
             placeholder="Ingresar Puesto" 
             required valor={puesto} 
             actualizarValor={setpuesto}
             />

            <Camponombre 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto}
            actualizarValor={setfoto}
              />

            <ListaOpciones
                valor={equipo}
                actualizarValor={setequipo}
                equipos={props.equipos}
            />

            <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo:</h2>
            
            <Camponombre 
            titulo="Titulo" 
            placeholder="Ingresar Titulo" 
            required valor={titulo} 
            actualizarValor={settitulo}
            />

            <Camponombre 
            titulo="Color en hex"
             placeholder="Hexadecimal" 
             required valor={color} 
             actualizarValor={setcolor}
             type="color"
             />
            <Boton texto="Registrar equipo"/>
              </form>
    </section>
}

export default Formulario