import "./colaboladores.css"
import {AiFillCloseCircle,AiOutlineHeart,AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {

   const {nombre,puesto,foto,equipo,id,fav} = props.datos
   const {colorPrimario,eliminarcolab,like} = props

// ternario : condicion ? verdadero : falso

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarcolab(id)}/>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt="west"></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="#ff0000" onClick={()=>{like(id)}}/> : <AiOutlineHeart onClick={()=>{like(id)}}/>}
        </div>
    </div>
    
}

export default Colaborador