import { IoStar, IoStarOutline } from "react-icons/io5"

function ProductRating(props) {
    const numStars = 5
    const { rate, count } = props
    
    return ( 
        <div>
            {[...Array(numStars)].map((_, index) =>  
                index+1 < parseFloat(rate) ? <IoStar key={index} /> : <IoStarOutline key={index} /> 
            )}
            <span>{rate}</span> <span>({count})</span>
        </div>
     );
}

export default ProductRating;