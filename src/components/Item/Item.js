import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount'
import React from 'react'

const Item = ( {producto} ) => {

    return (
        <section>
        <div className='productCard'>
            <img className="fotoCard"src={producto.img}/>
            <h4>{producto.nombre}</h4>
            <p>Precio: {producto.price}</p>
            <Link to={`/item/${producto.id}`} className="botonComprar btn btn-primary my-2">Comprar</Link>
        </div>
        </section>
    )
}

export default Item