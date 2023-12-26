import { ICONS } from "../../assets"
import { HeroTitle } from "../../components"


const ContactPage = () => {
  return (
    <div id="contactHeroTitle" >
        <HeroTitle
            logo = {ICONS.wave}
            color1="var(--dark)"
            color2="var(--primary)" 
            subtitle = "Let us know how we can help." 
            title = {{ 
                emphasize: 'Friendly Team. ', 
                remaining: 'Contact our ' 
            }} 
        />
    </div>
    )
}

export default ContactPage