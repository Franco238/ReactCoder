
import './App.scss';
import Navbar from './components/Navbar'
import CartWidget from "./components/CartWidget";
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div>
    <Navbar>
      <CartWidget/>
    </Navbar>
    <ItemListContainer/>
    
    </div>
  );
}

export default App;
