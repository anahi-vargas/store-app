import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io"
import ProductDescription from "./ProductDescription";
import RecommendedProducts from "./RecommendedProducts";
import ProductRating from "./ProductRating";
import ProductAddButton from "./ProductAddButton";
import { getSingleProduct } from "../../utils"
import { BackButton, ProductDetailsContainer, ProductDetailsImage, ProductDetailsInfo, ProductDetailsMain, ProductDetailsTitle } from "./StyledComponents";


function ProductDetailsPage() {
    const [product, setProduct] = useState([])
    const [isLoading, setLoading] = useState(true)
    let params = useParams()

    useEffect( () => {
        let mounted = true
        getSingleProduct(params.id).then(data => {
            if (mounted) {
                setProduct(data)
                setLoading(false)
            }
        })
        return () => { mounted = false; };
    }, [params.id])

    return ( 
        <ProductDetailsContainer>
            {!isLoading && 
            <>
                <BackButton to="/products">
                    <div><IoIosArrowBack /></div> 
                    <div>Back to Products</div>
                </BackButton>
                <ProductDetailsMain>
                    <ProductDetailsImage src={product.image} alt={`${product.title}`} />
                    <ProductDetailsInfo>
                        <ProductDetailsTitle>{product.title}</ProductDetailsTitle>
                        <div>${product.price.toFixed(2)}</div>
                        <ProductRating rate={product.rating.rate} count={product.rating.count} />
                        <ProductDescription description={product.description} category={product.category} />
                        <ProductAddButton product={product} />
                    </ProductDetailsInfo>
                </ProductDetailsMain>
                <RecommendedProducts productId={product.id} category={product.category} />
                </>}
        </ProductDetailsContainer>
     );
}

export default ProductDetailsPage;