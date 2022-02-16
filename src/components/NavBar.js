import { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Nav, Logo, Links, MenuButton, MenuButtonLine } from "./StyledComponents"
import { CartContext } from "../contexts/CartContext";
import SearchBar from "./SearchBar";

function NavBar(props) {
    const [toggleMenu, setToggleMenu] = useState(false)
    const { cart } = useContext(CartContext)
    const totalItems = cart.reduce( ( total, { quantity } ) => total + quantity , 0)
    let navigate = useNavigate()

    const handleToggleMenu = () => setToggleMenu(!toggleMenu)
    
    return(
        <Nav>
            <MenuButton onClick={handleToggleMenu}>
                <MenuButtonLine />
                <MenuButtonLine />
                <MenuButtonLine />
            </MenuButton>
            <Logo onClick={() => navigate("/")}>FakeStore</Logo>
            <Links active={toggleMenu}>
                {props.showSearchBar && <SearchBar/>}
                <NavLink className="nav-link" to="/products">Products</NavLink>
                <NavLink className="nav-link" to="/cart"><FaShoppingCart /> <span>My Cart</span> ({totalItems})</NavLink>
            </Links>
        </Nav>
    )
}

export default NavBar