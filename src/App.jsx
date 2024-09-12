import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
import "./App.css";
function App() {
  

  return (
    <section className='container-fluid bg-dark seccionPrincipal'>
      <h1 className='display-1 text-light text-center my-3'>Formulario</h1>
      <Formulario></Formulario>
    </section>
  )
}

export default App
