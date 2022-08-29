
import './App.scss';
import Navbar from './components/Navbar'
import CartWidget from "./components/CartWidget";
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div>
    <Navbar>
      <CartWidget/>
    </Navbar>
    <ItemListContainer>
      <ItemCount/>
    </ItemListContainer>
    
    </div>
  );
}

export default App;
