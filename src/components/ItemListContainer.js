import { Component } from "react";

const ItemListContainer = ({producto = "Camiseta titular", precio = 15000}) => {
    return(
        <div>
            <h3>{producto}</h3>
            <p>Precio: {precio}</p>
        </div>

    )
}

export default ItemListContainer