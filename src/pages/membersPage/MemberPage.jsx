import { ICONS } from "../../assets"
import { HeroTitle } from "../../components"


const MemberPage = () => {
  return (
    <div id="memberHeroTitle" >
        <HeroTitle
            logo = {ICONS.triangles}
            color1="var(--dark)"
            color2="var(--primary)" 
            subtitle = "We design and develop websites and apps that people love to use." 
            title = {{ 
                    emphasize: 'Our ', 
                    remaining: 'Members' 
            }}
        />
    </div>
    )
}

export default MemberPage