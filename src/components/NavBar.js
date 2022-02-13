import { useContext, useState } from "react"
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaSearch,FaHeart, FaUserCircle } from "react-icons/fa";
import { Nav, Logo, Links, MenuButton, MenuButtonLine } from "./StyledComponents"
import { CartContext } from "../contexts/CartContext";

function NavBar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const { cart } = useContext(CartContext)
    const totalItems = cart.reduce( ( total, { quantity } ) => total + quantity , 0)

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    return(
        <Nav>
            <MenuButton onClick={handleToggleMenu}>
                <MenuButtonLine />
                <MenuButtonLine />
                <MenuButtonLine />
            </MenuButton>
            <Logo>FakeStore</Logo>
            <Links active={toggleMenu}>
                {/* <NavLink className="nav-link" to="/"><FaSearch /></NavLink> */}
                <NavLink className="nav-link" to="/checkout"><FaUserCircle /></NavLink>
                {/* <NavLink className="nav-link" to="/"><FaHeart /></NavLink> */}
                <NavLink className="nav-link" to="/products">Products</NavLink>
                <NavLink className="nav-link" to="/cart"><FaShoppingCart /> <span>My Cart</span> ({totalItems})</NavLink>
            </Links>
        </Nav>
    )
}

export default NavBar