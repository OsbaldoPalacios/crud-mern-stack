import './App.css';
import ListaUsuarios from './components/ListaUsuarios';
import AgregarUsuario from './components/AgegarUsuario';
import EditarUsuario from './components/EditarUsuario';


function App() {
  return (
    <div className="App">
      <h1>Crud MERN STACK</h1>
      <ListaUsuarios/>
      <AgregarUsuario/>
      <EditarUsuario/>
    </div>
  );
}

export default App;
