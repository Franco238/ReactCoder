import { Component } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'


const ItemCount = ({stock, counter, setCounter, handleAgregar}) => {




    const handleAdd = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

const handleSubstract = () => {
    if (counter > 1) {
        setCounter(counter - 1)
    }
}

    return(
        <div className ="row">
            <h5 className=" tituloCard col-12">Selecciona la cantidad</h5>
            <p className="agregarCantidad col-12 ">{counter}</p>
            <button onClick={handleSubstract} className=" col-6 botonStock btn btn-secondary">-</button>
            <button onClick={handleAdd} className="col-6 botonStock btn btn-primary">+</button>
            <br/>
            <Link to={`/CartWidget`} onClick={handleAgregar} className="col-12 botonCarrito btn btn-outline-primary" disabled= {stock == 0}>Agregar al carrito</Link>
            {/* <button onClick={handleAgregar} className="col-12 botonCarrito btn btn-outline-primary" disabled= {stock == 0}>Agregar al carrito</button> */}
            <p>Stock disponible: {stock}</p>
        </div>
    )
}

export default ItemCount