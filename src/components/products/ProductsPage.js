import { useContext, useState, useEffect } from "react";
import { getProductsInCategory } from "../../utils"
import { ProductsContext } from "../../contexts/ProductsContext";
import CategoryList from "./CategoryList";
import Product from "./Product";
import { ProductGrid } from "../StyledComponents"
// import FilterList from "./FilterList";

function ProductsPage() {
    const { products, searchTerm, isLoading } = useContext(ProductsContext) 
    const [selectedCategory, setSelectedCategory] = useState("");
    const [productsInCategory, setProductsInCategory] = useState([]);

    useEffect( () => {
        let mounted = true
        if (selectedCategory !== "")
            getProductsInCategory(selectedCategory).then( data => 
                mounted && setProductsInCategory(data))
        return () => { mounted = false };
    }, [selectedCategory])

    return (  
        <>
        <CategoryList selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <div>
        <ProductGrid>
            {isLoading ? <div>Loading...</div> : 
            (selectedCategory === ""? products: productsInCategory)
            .filter( product => {
                if(searchTerm === "" || product.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return product
                }
                else { return false }
                }).map( product => 
            <Product key={product.id} id={product.id} image={product.image} price={product.price} title={product.title} />)}
        </ProductGrid>
        </div>
        </>
    );
}

export default ProductsPage;