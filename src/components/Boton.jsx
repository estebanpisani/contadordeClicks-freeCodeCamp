import React from 'react';

//En vez de recibir el objeto 'props' como parámetro, directamente indicamos qué propiedades de ese props {} queremos recibir. Esta sintaxis se llama Destructuring. 
function Boton({texto, esBotonDeClick}){
    return (

        //Con un operador ternario evalúo el booleano "esBotonDeClick". Según su valor (true o false) le asigno una clase u otra.
        <button className={esBotonDeClick ? "boton-click" : "boton-reiniciar"}>
            {texto}
        </button>
    )
}