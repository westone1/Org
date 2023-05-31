import "./equipo.css" 
import Colaborador from "../componentes/colaboladores"
import hexToRgba from 'hex-to-rgba'

const Equipo = (props)=>{

    const {colorPrimario,colorSecundario,titulo,id} = props.datos

    const fondo ={
        backgroundColor:hexToRgba(colorPrimario, 0.3) 
    }

    const {colaboradores, eliminarcolab,actColor,like} = props

    const estiloTitulo = {borderColor:colorPrimario} 
   
    return <>
        { 
            colaboradores.length > 0 &&
            <section className="equipo" style={fondo}>
           <input 
            className="color"
            type="color" 
            value={colorPrimario}
            onChange={(e)=>{
                actColor(e.target.value,id)
            }}
            />
            <h3 style={estiloTitulo}> {titulo} </h3>
            <div className= "colaboladores">            
                {
                    colaboradores.map((colaborador,index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} eliminarcolab={eliminarcolab} like={like}/> )
                }       
            </div>

            </section> 
        }
        </>
}

export default Equipo