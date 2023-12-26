import { ICONS} from '../../assets'
import { Button } from '../'
import { Link, NavLink } from 'react-router-dom'

import './header.css'

const Header = () => {
  return (
    <header id='header' >
        <Link to="/" className="logoLink">
            <div id="logoContainer">
                <img src= {ICONS.logo} alt="./Navalogy-Logo"  id='logo'/> 
                <h2 id="logoText">Navalogy</h2>  
            </div>
        </Link>

        <div id="navLinks">
            <NavLink to="/portfolio" className="navLink" activeClassName="active" exact>Portfolio</NavLink>
            <NavLink to="/team" className="navLink" activeClassName="active" exact>Team</NavLink>
            <NavLink to="/contact" className="navLink" activeClassName="active" exact>Contact</NavLink>
        </div>

        <div className="btnContainer">
            <Link to = "#" className="btnLink">
                <Button text="Get Started"/>
            </Link>
        </div>
    </header>
  )
}

export default Header