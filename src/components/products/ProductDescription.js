import { useState } from "react"
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md"
import { ProductDetailsDescription, DescriptionHeading, DescriptionParagraph, DetailsIcon } from "./StyledComponents"

function ProductDescription(props) {
    const [isOpen, setIsOpen] = useState(false)
    const { description, category } = props

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
    <ProductDetailsDescription>
        <DescriptionHeading onClick={handleClick}>
            Details
            <DetailsIcon>{ isOpen ? <MdOutlineKeyboardArrowRight /> :  <MdOutlineKeyboardArrowDown /> }</DetailsIcon>    
        </DescriptionHeading>
        <DescriptionParagraph isOpen={isOpen}>
            {description}
            <p>Category: {category}</p>
        </DescriptionParagraph>    
    </ProductDetailsDescription>
      );
}

export default ProductDescription;