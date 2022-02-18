import React, { useState, createContext } from "react"

const CartContext = createContext({ cart: [] })

const CartProvider = (props) => {
    const [cart, setCart] = useState([])

    const addProduct = ({ product, quantity}) => {
      const indexFound = cart.findIndex(item => item.product.id === product.id)

      if(indexFound === -1)
        setCart([...cart, {product, quantity}]) 
      else {
        const newCart = [...cart]
        const newQuantity = cart[indexFound].quantity + quantity
        newCart[indexFound].quantity = newQuantity
        setCart(newCart)
      }  
    }
   
    const removeProduct = (index) => {
      const newCart = [...cart]
      newCart.splice(index, 1)
      setCart(newCart)
    }

    const updateQuantity = (index, quantity) => {
      const newCart = [...cart]
      newCart[index].quantity = quantity
      setCart(newCart)
    }

    const getCartTotal = () => {
      const itemTotal = cart.reduce( ( total, { product: { price }, quantity } ) => total + price*quantity , 0)
      return itemTotal
    }

    const getTotalItems = () => {
      const itemTotal = cart.reduce( ( total, { quantity } ) => total + quantity , 0)
      return itemTotal
    }

    return(
        <CartContext.Provider value={{cart, setCart, addProduct, removeProduct, updateQuantity, getCartTotal, getTotalItems}}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };