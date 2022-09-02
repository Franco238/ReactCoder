
import './App.scss';
import Navbar from './components/Navbar'
import CartWidget from "./components/CartWidget";
import ItemListContainer from './components/ItemListContainer';
import Banner from './components/Banner';


function App() {
  return (
    <div>
    <Navbar>
      <CartWidget/>
    </Navbar>
    <Banner/>
    <ItemListContainer/>
    
    </div>
  );
}

export default App;
