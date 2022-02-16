import { useEffect, useState } from "react"
import { CategoryButton, CategoryName, StyledCategoryList } from "./StyledComponents"
import { getAllCategories } from "../../utils"

function CategoryList(props) {
    const [isLoading, setLoading] = useState(true)
    const [categories, setCategories ] = useState([])
    const {selectedCategory, setSelectedCategory} = props

    const handleClick = (category) => setSelectedCategory(category)
    
    useEffect( () => {
        let mounted = true
        getAllCategories().then(data => {
            if(mounted) {
                setCategories(data)
                setLoading(false)
            }
        })
        return () => { mounted = false };
    }, [])

    return (
        <StyledCategoryList>
            <div>Shop By Category</div>
            {!isLoading &&
            <div>
                <CategoryButton onClick={() => handleClick("")}>All</CategoryButton>
                {categories.map( (category, index) => <CategoryButton key={index} onClick={() => handleClick(category)}>{category}</CategoryButton>)}
            </div>}
            <CategoryName>{selectedCategory}</CategoryName>
        </StyledCategoryList>
    )
}

export default CategoryList;