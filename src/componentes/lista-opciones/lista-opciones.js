import "./lista-opciones.css"
//metodo map = arreglo.map( (equipos,index) )=>{ 
// return <option></option>   
//})

function ListaOpciones (props) { 

    
    const manejarcambio = (e)=>{
            console.log(e.target.value)
            props.actualizarValor(e.target.value)
    }
    
    return <div className="lista__opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarcambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map( (equipo, index) => {
                return <option key={index}>{equipo}</option>
            } ) }
        </select>
    </div>

}

export default ListaOpciones