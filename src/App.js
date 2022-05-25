//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';
import Button from './ItemCount/button';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ItemListContainer greeting="Bienvenidos a Tech Zone"/>
        <NavBar /> 
        <ItemCount />
        <Button />
        
      </header>
    </div>
  );
}

export default App;
