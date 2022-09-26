import { useContext } from "react"
import { CartContext } from "../Contexto/CartContext"
import {FaTrashAlt} from 'react-icons/bs'

const Cart = () => {

    const {cart, cartTotal, emptyCart, removeItem} = useContext(CartContext)


    return (
        <div>
            <h2>Carrito</h2>

            {cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <p>Precio: ${item.price}</p>
                    <p>Cantidad: {item.camtidad}</p>
                    <button onClick={removeItem(item.id)} className="mx-3"><FaTrashAlt/></button>

                </div>
            )
            )}

                <h3>Total: ${cartTotal()}</h3>
                <button onClick={emptyCart}>Vaciar Carrito</button>

        </div>
    )
}

export default Cart