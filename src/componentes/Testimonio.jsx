/*doble punto por que debo salir de la carpeta actual, al salir me ubicare en la carpeta 'src'*/
import '../hojas-de-style/Testimonio.css'

export default function Testimonio(props){
  
  

  return( 


    <div className='contenedor-testimonio'>
      
      <img src={props.imagen} className="imagen-testimonio" alt='foto de emma'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><b>{props.nombre}</b> en <b>{props.pais}</b></p>
        <p className='cargo-testimonio'><b>{props.cargo}</b> en <b>{props.empresa}</b></p>
        <p className='texto-testimonio'>{props.testimonio}</p>
      </div>

    </div>

  );

}