import { Button, Header } from "../../components"
import './heroSection.css'


const HeroSection = () => {

    return (
    <div>

        <Header
            subtitle="We design and develop websites and apps that people love to use." 
            color1="var(--primary)" 
            color2="var(--dark)"
            title={{ 
                    emphasize: 'Empowering tomorrow, ', 
                    remaining: 'Innovating today Pioneering the Future of Connectivity' 
            }} 
        />

        <Button id="ctaBtn-2" text="Dive Deeper" color= "var(--light)" bcgColor = "var(--dark)"/>

    </div>
    )
}

export default HeroSection