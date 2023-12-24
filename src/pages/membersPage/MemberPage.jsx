import { ICONS } from "../../assets"
import { Header } from "../../components"


const MemberPage = () => {
  return (
    <div>
        <Header
            logo = {ICONS.triangles}
            subtitle = "We design and develop websites and apps that people love to use." 
            color1="var(--dark)"
            color2="var(--primary)" 
            title = {{ 
                    emphasize: 'Our ', 
                    remaining: 'Members' 
            }} 
        />

    </div>
    )
}

export default MemberPage