import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';

function App() {

  const manejarClick = () =>{
    console.log("Click");
  }

  const reiniciarContador = () =>{
  console.log("Reiniciar");
  }


  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Contador numClicks='5' />
        <Boton texto='Click' esBotonDeClick={true} manejarClick={manejarClick} />
        <Boton texto='Reiniciar' esBotonDeClick={false} manejarClick={reiniciarContador}/>


      </div>
    </div>
  );
}

export default App;
