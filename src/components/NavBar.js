import { useState } from "react"
import { NavLink } from "react-router-dom";
import { FaShoppingBag, FaSearch,FaHeart, FaUserCircle } from "react-icons/fa";
import { Nav, Logo, Links, MenuButton, MenuButtonLine } from "./StyledComponents"

function NavBar() {
    const [toggleMenu, setToggleMenu] = useState(false)

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
                <NavLink className="nav-link" to="/cart"><FaShoppingBag /></NavLink>
            </Links>
        </Nav>
    )
}

export default NavBar