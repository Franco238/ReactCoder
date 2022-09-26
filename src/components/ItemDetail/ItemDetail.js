import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { CartContext } from '../Contexto/CartContext';
import ItemCount from '../ItemCount';


const ItemDetail = ({item}) => {

  const {cart, addToCart, isInCart} = useContext(CartContext)
  console.log(cart)

  const [cantidad, setCantidad] = useState(1)

  const handleAgregar = () => {
            const itemToCart = {
              id: item.id,
              precio: item.price,
              nombre: item.nombre,
              cantidad

            }
            console.log(isInCart(item.id))
            addToCart(itemToCart)
        }


    return (

        <div className='containerDetail row'>
                
                <section className='col-6'>
                <img variant="top" className='fotoDetail' src={item.img} />    
                </section>
                <section className='col-6'>
                <h1 className='tituloDetail'>{item.name}</h1>
                
                <p>
                  {item.description}
                </p>
              
              <ul>
                <ul>Precio: ${item.price}</ul>
                <ul>{item.category}</ul>
              </ul>
              
              {
                isInCart(item.id)
                ?
                <Link to="/cart" className='btn btn-primary my-2'>Finalizar mi compra</Link>
                :
                <ItemCount 
                stock={item.stock}
                counter={cantidad}
                setCounter={setCantidad}
                handleAgregar={handleAgregar}
                />
              }
                
                </section>

                
                
            
        </div>
            
          );
        }
        

export default ItemDetail