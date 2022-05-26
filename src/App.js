//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './ItemListContainer/ItemListContainer'; 
import ItemCount from './ItemCount/ItemCount';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ItemListContainer greeting="Bienvenidos a Tech Zone"/>
        <NavBar /> 
        <ItemCount />
      </header>
    </div>
  );
}

export default App;
