import { ICONS, IMAGES } from '../../assets'
import { Button } from '../'
import Title from '../title/Title'
import './header.css'


const Header = ( props ) => {

  const { logo, title, subtitle, color1, color2 } = props

  return (
    <>
        <header id='header' >
            <div id="logoContainer">
                <img src= {ICONS.logo} alt="./Navalogy-Logo"  id='logo'/> 
                <h2 id="logoText">Navalogy</h2>  
            </div>


            <div id="navLinks">
                <a href="#home" >About</a>
                <a href="#about">Portfolio</a>
                <a href="#services">Team</a>
                <a href="#contact">Contact</a>
            </div>

            <div className="btnContainer">
                <Button id="ctaBtn" text="Get Started" color= "var(--light)" bcgColor = "var(--dark)"/>
            </div>
        </header>

        <Title 
            id = "title"
            logo = {logo}
            subtitle = {subtitle}
            color1 = {color1}
            color2 = {color2}
            title = {title} 
        />

        <div className="grids">
            <img src= {IMAGES.grids_large} alt="grid-large" className="grid" />
            <img src= {IMAGES.grids_large} alt="grid-large" className="grid grid2" />
            <img src= {IMAGES.grids_large} alt="grid-large" className="grid grid3" />
        </div>

    </>
  )
}

export default Header