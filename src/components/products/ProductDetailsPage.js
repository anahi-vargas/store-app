import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io"
import { IoStar, IoStarOutline } from "react-icons/io5"
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md"
import { CartContext } from "../../contexts/CartContext";
import { getSingleProduct } from "../../utils"
import { BackButton, ProductDetailsContainer, ProductDetailsImage, ProductDetailsInfo, ProductDetailsMain,
     Button, QuantityHeading, QuantitySelect, ProductDetailsDescription, DescriptionHeading, DescriptionParagraph, DetailsIcon, ProductDetailsTitle } from "./StyledComponents";
import RecommendedProducts from "./RecommendedProducts";

function ProductDetailsPage() {
    const [product, setProduct] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [quantity, setQuantity] = useState(1)
    const { addProduct } = useContext(CartContext)
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
                        <div>${product.price.toFixed(2)}</div>
                        <div>
                            {[...Array(5)].map((_, index) =>  
                                index+1 < parseFloat(product.rating.rate) ? <IoStar key={index} /> : <IoStarOutline key={index} /> 
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
                                {[...Array(10).keys()].map( quantity => <option key={quantity} value={quantity+1} name="quantity">{quantity+1}</option>)}
                            </QuantitySelect>
                            <Button onClick={() => addProduct({product, quantity})}>Add to Cart</Button>
                        </div>
                    </ProductDetailsInfo>
                </ProductDetailsMain>
                <RecommendedProducts productId={product.id} category={product.category} />
                </>}
        </ProductDetailsContainer>
     );
}

export default ProductDetailsPage;