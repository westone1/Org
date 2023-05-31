import {useState} from "react"
import "./mi-org.css"

const Miorg = (props) => {
    
    /*const [mostrar,actualizarmostrar] = useState(true)

    const manejarclick= ()=>{
        console.log("Mostrar/ocultar",mostrar)
        actualizarmostrar(!mostrar)
    }
    */
    return <section className="orgsection">
        <h3 className="tittle">Mi organizacion</h3>
        <img src="img/add.png" alt="add" onClick={props.cambiarmostrar}></img>
    </section>
}


export default Miorg