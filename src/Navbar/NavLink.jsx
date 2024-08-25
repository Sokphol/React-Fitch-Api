import User from "./User"
import '../Navbar/navbar.css';

const NavLink = () => {
  return (
    <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Services</li>
        <User/>
    </ul>
  )
}

export default NavLink