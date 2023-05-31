import { useState } from 'react';
import {v4 as uuid} from "uuid"
import logo from './logo.svg';
import './App.css';
import Header from './componentes/header/header.js';
import Formulario from './componentes/formulario/formulario.js';
import Camponombre from './componentes/campo/campo.js';
import Miorg from './componentes/mi-org/mi-org.js';
import Equipo from './equipo';
import Footer from './componentes/footer';

function App() {
  
  const [mostrarFormulario, actualizarForm] = useState(true)
  const [colaboradores, actualizarColaborador ] = useState([{ 
    id: uuid(),
    nombre:"Harland",
    puesto:"instructor",
    foto:"https://github.com/harlandlohora.png",
    equipo:"Programacion",
    fav:true
  },

  { 
    id: uuid(),
    nombre:"genesys",
    puesto:"instructor",
    foto:"https://github.com/genesysaluralatam.png",
    equipo:"Front-End",
    fav:true
  },
  { 
    id: uuid(),
    nombre:"jeanmarie",
    puesto:"instructor",
    foto:"https://github.com/JeanmarieAluraLatam.png",
    equipo:"Data-Science",
    fav:true
  },  
  { 
    id: uuid(),
    nombre:"cristian",
    puesto:"instructor",
    foto:"https://github.com/christianpva.png",
    equipo:"Devops",
    fav:true
  },
  {   
    id: uuid(),
    nombre:"jose",
    puesto:"instructor",
    foto :" https://github.com/JoseDarioGonzalezCha.png",
    equipo:"Ux-Desing",
    fav:true
  },
  { 
    id: uuid(),
    nombre:"jose",
    puesto:"instructor",
    foto:"https://github.com/JoseDarioGonzalezCha.png",
    equipo:"Programacion",
    fav:true
  },
  { 
    id: uuid(),
    nombre:"jose",
    puesto:"instructor",
    foto:" https://github.com/JoseDarioGonzalezCha.png",
    equipo:"Innovacion y Gestion",
    fav:false
  },
  { 
    id: uuid(),
    nombre:"jose",
    puesto:"instructor",
    foto:" https://github.com/JoseDarioGonzalezCha.png",
    equipo:"Ux-Desing",
    fav:false
  },
  ])
  
  const [ equipos , actualizarEquipos] = useState([

  {
    id: uuid(),
    titulo:"Programacion",
    colorPrimario: "#57C278",
    colorSecundario:"#D9F7E9"
  },
  {
    id: uuid(),
    titulo:"Front-End",
    colorPrimario: "#82CFFA",
    colorSecundario:"#E8F8FF"
  },
  {
    id: uuid(),
    titulo:"Data-Science",
    colorPrimario: "#A6D157",
    colorSecundario:"#F0F8E2"
  },
  {
    id: uuid(),
    titulo:"Devops",
    colorPrimario: "#E06B69",
    colorSecundario:"#FDE7E8"
  },
  {
    id: uuid(),
    titulo:"Ux-Desing",
    colorPrimario: "#DB6EBF",
    colorSecundario:"#FAE9F5"
  },
  {
    id: uuid(),
    titulo:"Movil",
    colorPrimario: "#FFBA05",
    colorSecundario:"#FFF5D9"
  },
  {
    id: uuid(),
    titulo:"Innovacion y Gestion",
    colorPrimario: "#FF8A29",
    colorSecundario:"#FFEEDF"
  },
  ])

  const cambiarmostrar = ()=>{
    actualizarForm(!mostrarFormulario)
  }

  // Registrar Colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)

    //Spread operator [...] = Crea una copia de los valores actuales
    //Actualizar colaborador

    actualizarColaborador([...colaboradores,colaborador])
  }

  //Eliminar colaborador

  const eliminarcolab = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevoColab = colaboradores.filter((colaborador) =>colaborador.id !== id)
    console.log(nuevoColab)
    actualizarColaborador(nuevoColab)
  }
  //colo de Equipo

  const actColor = (color,id) => {
    const equiposActualizados = equipos.map((equipo) =>{
      if(equipo.id == id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoequipo)=>{
    console.log(nuevoequipo)
    actualizarEquipos([...equipos,{...nuevoequipo,id:uuid}])
  }

  //Añadir/quitar fav

  const like = (id) => {
    console.log("like",id)
    const colabfav = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaborador(colabfav)
  }

  

  return (
    <div className="App">
      <Header></Header>
      {mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo) => equipo.titulo)} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo}/> : <div></div>}
      <Miorg cambiarmostrar={cambiarmostrar}/>
    
     {
      equipos.map( (equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} eliminarcolab={eliminarcolab} actColor={actColor} like={like}/>)
     }
     <Footer/>
    
    </div>
  );
}

export default App;
  