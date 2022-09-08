import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount'
import React from 'react'

const Item = ( {producto} ) => {

    return (
        <section className='listaProductos'>
        <div className='col-3'>
            <img className="fotoCard"src={producto.img}/>
            <h4>{producto.nombre}</h4>
            <p>Precio: {producto.price}</p>
            <small>Stock disponible: {producto.stock}</small>
            <p>{producto.description}</p>
            <Link to={`/item/${producto.id}`} className="btn btn-primary my-2">Agregar al carrito</Link>
            <ItemCount/>
        </div>
        </section>
    )
}

export default Item