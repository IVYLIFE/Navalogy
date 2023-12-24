import { ICONS } from "../../assets"
import { Header } from "../../components"


const ContactPage = () => {
  return (
    <div>
        <Header
            logo = {ICONS.wave}
            subtitle = "Let us know how we can help." 
            color1="var(--dark)"
            color2="var(--primary)" 
            title = {{ 
                  emphasize: 'Friendly Team. ', 
                  remaining: 'Contact our ' 
            }} 
        />

    </div>
    )
}

export default ContactPage