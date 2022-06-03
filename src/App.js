import './App.css';
import Boton from './components/Boton';

function App() {

  const manejarClick = () =>{
    console.log("Click");
  }

  const reiniciarContador = () =>{

  }


  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Boton texto='Click' esBotonDeClick={true} manejarClick={manejarClick} />
        <Boton texto='Reiniciar' esBotonDeClick={false} manejarClick={reiniciarContador}/>


      </div>
    </div>
  );
}

export default App;
