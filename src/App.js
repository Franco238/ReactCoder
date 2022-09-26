
import './App.scss';
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Historia from './components/Historia/Historia';
import Contacto from './components/Contacto/Contacto';
import {CartProvider } from './components/Contexto/CartContext';
import Cart from './components/Cart/Cart';



const App = () => {


  return (


    
    <div>

      // <CartProvider>


<BrowserRouter>

    <Navbar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path="/historia" element={<Historia/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            
            <Route path='*' element={ <Navigate to="/"/>} />
          </Routes>


          {/* <Footer/> */}
      </BrowserRouter>

      </CartProvider>


    
    
    
  
    
    
    </div>
  );
}

export default App;
