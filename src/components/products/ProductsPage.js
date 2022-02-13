import { useContext, useState, useEffect } from "react";
import { getProductsInCategory } from "../../utils"
import { ProductsContext } from "../../contexts/ProductsContext";
import CategoryList from "./CategoryList";
import Product from "./Product";
import { ProductGrid } from "../StyledComponents"

function ProductsPage() {
     const { products, isLoading } = useContext(ProductsContext) 
    const [selectedCategory, setSelectedCategory] = useState("");
    const [productsInCategory, setProductsInCategory] = useState([]);

    useEffect( () => {
        if (selectedCategory !== "")
            getProductsInCategory(selectedCategory).then( data => setProductsInCategory(data))
    }, [selectedCategory])

    return (  
        <>
        <CategoryList selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <div>
        <ProductGrid>
            {isLoading ? <div>Loading...</div> : 
            (selectedCategory === ""? products: productsInCategory).map( product => 
            <Product key={product.id} id={product.id} image={product.image} price={product.price} title={product.title} />)}
        </ProductGrid>
        </div>
        </>
    );
}

export default ProductsPage;