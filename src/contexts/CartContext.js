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
        newCart.slice(indexFound, 1, {product, newQuantity})
        setCart(newCart)
      }
         
      console.log(cart)
      console.log(indexFound)
      
    }
   
    
    const removeProduct = (index) => {
      const newCart = [...cart]
      newCart.splice(index, 1)
      setCart(newCart)
    }

    // const updateQuantity = () => {}

    return(
        <CartContext.Provider value={{cart, setCart, addProduct, removeProduct}}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };