import { useContext } from "react";
import Product from "./Product"
import { ProductsContext } from "../../contexts/ProductsContext";
import { RecommendedHeading, RecommendedItems} from "./StyledComponents"

function RecommendedProducts(props) {
    const { products } = useContext( ProductsContext)
    return ( 
        <div>
            <RecommendedHeading>You May Also Like</RecommendedHeading>
            <RecommendedItems>
                {products.filter(item => item.category === props.category && item.id !== 
                props.productId).slice(0,3).map(product => 
                    <Product key={product.id} id={product.id} image={product.image} price={product.price} title={product.title}/>)}
            </RecommendedItems>
        </div>
     );
}

export default RecommendedProducts;