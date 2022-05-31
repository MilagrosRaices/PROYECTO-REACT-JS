//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './Item/ItemListContainer'; 
import Title from './Title/Title';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Title greeting="Bienvenidos a Tech Zone"/>
        <NavBar /> 
        <ItemDetailContainer /> 
        <ItemListContainer />
             
    
      </header>
    </div>
  );
}

export default App;
