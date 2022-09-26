import { Component, useContext } from "react";
import {BsFillCartFill} from "react-icons/bs"
import { Link } from "react-router-dom";
import { CartContext } from "./Contexto/CartContext";


const CartWidget = () => {

    const {cartQuantity } = useContext(CartContext)

    return (
            <Link to="/cart">
                <BsFillCartFill/>
                <span>{cartQuantity()}</span>
            </Link>
    )

}

export default CartWidget