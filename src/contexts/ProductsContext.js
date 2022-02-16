import React, { useState, useEffect, createContext } from "react"
import { getAllProducts } from "../utils"

const ProductsContext = createContext({ products: [] })

const ProductsProvider = (props) => {
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [isLoading, setLoading] = useState(true)

    useEffect( () => {
        let mounted = true
        getAllProducts().then(data => {
            if(mounted){
                setProducts(data);
                setLoading(false);
            }
        })
        return () => { mounted = false };
    }, [])

    return (
        <ProductsContext.Provider value={{products, setProducts, searchTerm, setSearchTerm, isLoading }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export { ProductsContext, ProductsProvider };