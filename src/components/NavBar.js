import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"
import { FaShoppingCart } from "react-icons/fa";
import { MdClose } from "react-icons/md"
import { Nav, Logo, Links, NavLinks, MenuButton } from "./StyledComponents"
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
                {toggleMenu ? <MdClose fontSize="2rem" /> : <GiHamburgerMenu fontSize="1.5rem" /> }
            </MenuButton>
            <Logo onClick={() => navigate("/products")}>FakeStore</Logo>
            <Links active={toggleMenu}>
                {props.showSearchBar && <SearchBar/>}
                <NavLinks to="/products">Products</NavLinks>
                <NavLinks to="/cart"><FaShoppingCart /> <span>My Cart</span> ({totalItems})</NavLinks>
            </Links>
        </Nav>
    )
}

export default NavBar