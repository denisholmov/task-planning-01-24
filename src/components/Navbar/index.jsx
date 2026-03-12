import { NavbarUi } from "../../ui/NavbarUi"
import { navbarItemsList } from "./constants"

export const Navbar = () => {
    return(<NavbarUi navbarItemsList={navbarItemsList}/>)
}