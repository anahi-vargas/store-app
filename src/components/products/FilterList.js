import { useState } from "react";
import { FilterListForm } from "./StyledComponents";

function FilterList(props) {
    const [currMode, setCurrentMode] = useState()
    const { setMode } = props
    const filters = [{name: "ascPrice", type:"Price: Low to High"}, {name: "descPrice", type:"Price: High to Low"},
    {name: "ascRating", type:"Rating: Low to High"}, {name: "descRating", type:"Rating: High to Low"}]

    const handleSubmit = (e) => {
        e.preventDefault()
        setMode(currMode)
    }

    return(
    <FilterListForm onSubmit={handleSubmit}>
        <div>Sort By</div>
        {filters.map( filter => 
            <label>
               <input type="radio" value={filter.name} name="currMode" onChange={(e) => setCurrentMode(e.target.value)}/>
               <span>{filter.type}</span>
           </label>
            )}
        <button>Done</button>
    </FilterListForm>)
}

export default FilterList;