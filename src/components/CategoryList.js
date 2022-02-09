import { useEffect, useState } from "react"
import { getProductsInCategory } from "../utils";
import ProductList from "./ProductList";
import { StyledCategoryList } from "./StyledComponents"

function CategoryList(props) {
    const { categories } = props
    const [selectedCategory, setSelectedCategory] = useState("");
    const [productsInCategory, setProductsInCategory] = useState([]);

    const handleClick = (category) => {
        setSelectedCategory(category)
    }

    useEffect( () => {
        getProductsInCategory(selectedCategory).then( data => setProductsInCategory(data))
    }, [selectedCategory])

    return (
        <StyledCategoryList>
            <div>Shop By Category</div>
            <div>
                {categories.map( (category, index) => <button key={index} onClick={() => handleClick(category)}>{category}</button>)}
            </div>
            <div>{selectedCategory}</div>
            {productsInCategory.length > 0 && <ProductList products={productsInCategory} />}
        </StyledCategoryList>
    )
}

export default CategoryList;