import React from 'react';
import '../styles/Boton.css'

//En vez de recibir el objeto 'props' como parámetro, directamente indicamos qué propiedades de ese props {} queremos recibir. Esta sintaxis se llama Destructuring.
//Recibimos un   string,    boolean,   función.
function Boton({texto, esBotonDeClick, manejarClick}){
    return (

        //Con un operador ternario evalúo el booleano "esBotonDeClick". Según su valor (true o false) le asigno una clase u otra.
        <button className={esBotonDeClick ? "boton-click" : "boton-reiniciar"}
        onClick={manejarClick}>
            {texto}
        </button>
    )
}

export default Boton;