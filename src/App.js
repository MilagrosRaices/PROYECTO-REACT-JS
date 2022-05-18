//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer'; 



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ItemListContainer greeting="Bienvenidos a su Boutique"/>
        <NavBar />
      </header>
    </div>
  );
}

export default App;
