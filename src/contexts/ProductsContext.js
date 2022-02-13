import React, { useState, useEffect, createContext } from "react"
import { getAllProducts } from "../utils"

const ProductsContext = createContext({ products: [] })

const ProductsProvider = (props) => {
    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect( () => {
        getAllProducts().then(data => {
          setProducts(data);
          setLoading(false);
        })
    }, [])

    return (
        <ProductsContext.Provider value={{products, setProducts, isLoading}}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export { ProductsContext, ProductsProvider };