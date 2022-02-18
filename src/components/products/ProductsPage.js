import { useContext, useState, useEffect } from "react";
import { getProductsInCategory } from "../../utils"
import { ProductsContext } from "../../contexts/ProductsContext";
import CategoryList from "./CategoryList";
import Product from "./Product";
import { ProductGrid, ProductPageMain } from "./StyledComponents"
import FilterList from "./FilterList";

function ProductsPage() {
    const { products, searchTerm, isLoading } = useContext(ProductsContext) 
    const [selectedCategory, setSelectedCategory] = useState("");
    const [productsInCategory, setProductsInCategory] = useState([]);
    const [mode, setMode] = useState("")

    useEffect( () => {
        let mounted = true
        if (selectedCategory !== "")
            getProductsInCategory(selectedCategory).then( data => 
                mounted && setProductsInCategory(data))
        return () => { mounted = false };
    }, [selectedCategory])

    useEffect( () => {
        let mounted = true
        console.log(mode)
        if (mode === "ascPrice") {
            products.sort((a, b) => a.price - b.price);
        }
        else if (mode === "descPrice") {
            products.sort((a, b) => b.price - a.price);
        }
        else if (mode === "ascRating") {
            products.sort((a, b) => a.rating.rate -b.rating.rate);
        }
        else if (mode === "descRating") {
            products.sort((a, b) => b.rating.rate - a.rating.rate);
        }
    
        return () => { mounted = false };
    }, [mode])

    return (  
        <>
        <CategoryList selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <ProductPageMain>
            {/* <FilterList setMode={setMode}/> */}
            <ProductGrid>
                {isLoading ? <div>Loading...</div> : 
                (selectedCategory === "" ? products: productsInCategory)
                .filter( product => {
                    if(searchTerm === "" || product.title.toLowerCase().includes(searchTerm.toLowerCase())){
                        return product
                    }
                    else { return false }
                    }).map( product => 
                <Product key={product.id} id={product.id} image={product.image} price={product.price} title={product.title} />)}
            </ProductGrid>
        </ProductPageMain>
        </>
    );
}

export default ProductsPage;