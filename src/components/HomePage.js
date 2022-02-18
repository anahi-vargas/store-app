import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSingleProduct } from "../utils";
import { Button } from "./products/StyledComponents";
import { ArrivalsContainer, HomeMainContainer, HomePageContainer, HomePageImage, ImageContainer } from "./StyledComponents";

function HomePage() {
    const [firstProduct, setFirstProduct] = useState([])
    const [secondProduct, setSecondProduct] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        getSingleProduct(1).then(data => setFirstProduct(data));
        getSingleProduct(17).then(data => setSecondProduct(data));
    }, [])

    console.log(firstProduct)

    return ( 
        <HomePageContainer>
            <div>Free shipping on all orders over $75</div>
            <HomeMainContainer>
                <ArrivalsContainer>
                    <div>New arrivals are here</div>
                    <Button onClick={() => navigate("/products")}>Shop Now</Button>
                </ArrivalsContainer>
                <ImageContainer>
                    <HomePageImage src={firstProduct.image} alt={firstProduct.title} />
                    <HomePageImage src={secondProduct.image} alt={secondProduct.title} />
                </ImageContainer>
            </HomeMainContainer>
        </HomePageContainer>
     );
}

export default HomePage;