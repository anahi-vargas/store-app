import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io"
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md"
import { CartContext } from "../../contexts/CartContext";
import { ProductsContext } from "../../contexts/ProductsContext";
import { getSingleProduct } from "../../utils"
import { IoStar, IoStarOutline } from "react-icons/io5"
import Product from "./Product";
import { BackButton, ProductDetailsContainer, ProductDetailsImage, ProductDetailsInfo, ProductDetailsMain,
     AddButton, QuantityHeading, QuantitySelect,RecommendedContainer, RecommendedHeading, RecommendedProducts, 
     ProductDetailsDescription, DescriptionHeading, DescriptionParagraph, DetailsIcon, ProductDetailsTitle } from "./StyledComponents";

function ProductDetailsPage() {
    const [product, setProduct] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [quantity, setQuantity] = useState(1)
    const { addProduct } = useContext(CartContext)
    const { products } = useContext(ProductsContext)
    let params = useParams()

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

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
                        <div>${product.price}</div>
                        <div>
                        {[...Array(5)].map((star, index) =>  
                            index+1 < parseFloat(product.rating.rate) ? <IoStar /> : <IoStarOutline /> 
                        )}
                        <span>{product.rating.rate}</span> <span>({product.rating.count})</span></div>
                        <ProductDetailsDescription>
                            <DescriptionHeading onClick={handleClick}>
                                Details
                                <DetailsIcon>{ isOpen ? <MdOutlineKeyboardArrowRight /> :  <MdOutlineKeyboardArrowDown /> }</DetailsIcon>    
                            </DescriptionHeading>
                            <DescriptionParagraph isOpen={isOpen}>
                                {product.description}
                                <p>Category: {product.category}</p>
                            </DescriptionParagraph>    
                        </ProductDetailsDescription>
                        
                        <QuantityHeading>Qty</QuantityHeading>
                        <div>
                        <QuantitySelect value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}>
                            {[...Array(10).keys()].map( quantity => <option value={quantity+1} name="quantity">{quantity+1}</option>)}
                        </QuantitySelect>
                        <AddButton onClick={() => addProduct({product, quantity})}>Add to Cart</AddButton>
                        </div>
                    </ProductDetailsInfo>
                </ProductDetailsMain>
                <RecommendedContainer>
                    <RecommendedHeading>You May Also Like</RecommendedHeading>
                    <RecommendedProducts>{products.filter(item => item.category === product.category && item.id !== 
                        product.id).slice(0,3).map(product => <Product key={product.id} id={product.id} 
                        image={product.image} price={product.price} title={product.title}/>)}
                    </RecommendedProducts>
                </RecommendedContainer>
                </>}
        </ProductDetailsContainer>
     );
}

export default ProductDetailsPage;