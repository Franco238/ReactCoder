import { Component } from "react";

const ItemListContainer = ({producto = "Camiseta titular", precio = 15000, children}) => {
    return(
        <div>
            <h3>{producto}</h3>
            <p>Precio: {precio}</p>
            {children}
        </div>

    )
}

export default ItemListContainer