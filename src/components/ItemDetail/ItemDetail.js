import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from '../ItemCount';


const ItemDetail = ({item}) => {

  const [cantidad, setCantidad] = useState(1)

  const handleAgregar = () => {
            console.log(
            {...item,
            cantidad
        }
            
        )
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
              
                <ItemCount 
                stock={item.stock}
                counter={cantidad}
                setCounter={setCantidad}
                handleAgregar={handleAgregar}
                />
                </section>
                
            
        </div>
            
          );
        }
        

export default ItemDetail