
import logo from '../assets/R.png';
import NavLink from './NavLink';
import '../Navbar/navbar.css';



const Navbar = () => {

  return (
  
           <nav>
          <img src={logo} alt="Logo" />
          <NavLink/>
          </nav>
   
 
  )
}

export default Navbar