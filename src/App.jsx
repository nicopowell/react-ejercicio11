import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import Titulo from './components/Titulo'
import Formulario from './components/formulario';
import ListaNoticias from './components/ListaNoticias';

function App() {
  return (
    <>
      <Titulo></Titulo>
      <hr />
      <Container className='border p-4'>
        <Formulario></Formulario>
        <hr />
        <ListaNoticias></ListaNoticias>
      </Container>
    </>
  )
}

export default App
