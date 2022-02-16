import { useContext } from "react";
import { MdSearch } from "react-icons/md"
import { ProductsContext } from "../contexts/ProductsContext";
import { SearchBarContainer } from "./StyledComponents";

function SearchBar() {
    const { searchTerm, setSearchTerm } = useContext(ProductsContext)

    return ( 
        <SearchBarContainer>
            <input placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <div><MdSearch /></div>
        </SearchBarContainer>
    );
}

export default SearchBar;