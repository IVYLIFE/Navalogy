import './header.css'
import { ICONS, IMAGES } from '../../assets'
import { Button } from '../'
import Title from '../title/Title'

const Header = () => {
  return (
    <>
        <header id='header' >
            <div id="logoContainer">
                <img src= {ICONS.logo} alt="./Navalogy-Logo"  id='logo'/> 
                <h2 id="logoText">Navalogy</h2>  
            </div>


            <div id="navLinks">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>

            <div className="btnContainer">
                <Button id="ctaBtn" text="Get Started" color= "var(--light)" bcgColor = "var(--dark)"/>
            </div>

            <img src= {IMAGES.grids_large} alt="grid-large" className="grid" />
            <img src= {IMAGES.grids_large} alt="grid-large" className="grid grid2" />

        </header>

        <Title 
            id="title"
            subtitle="We design and develop websites and apps that people love to use." 
            color="var(--primary)" 
            title={{ 
                    emphasize: 'Empowering tomorrow, ', 
                    remaining: 'Innovating today Pioneering the Future of Connectivity' 
            }} 
        />


    </>
  )
}

export default Header