import { createContext, useEffect } from "react";
import { useState } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext()

const cartInit = JSON.parse(localStorage.getItem("carrito")) || []

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(cartInit)

    const addToCart = (item) => {
      setCart ([...cart, item])
    }
  
    const isInCart = (id) => {
      return cart.some((item) => item.id === id)
    }
  
    const cartQuantity = () => {
      return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }
 
    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.price)
    }

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }
    
    const emptyCart = () => {
        Swal.fire({
            title: '¿Esta seguro?',
            text: "Se va a vaciar su carrito",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, vaciar'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart({})
            }
          })

    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(cart))
    }, [cart])


    return(
        <CartContext.Provider      value={
            {
              cart,
              setCart,
              isInCart,
              cartQuantity,
              cartTotal,
              emptyCart,
              removeItem,
            }
            }>
                {children}
        </CartContext.Provider>
    )
}