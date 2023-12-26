import { ICONS } from "../../assets"
import { HeroTitle } from "../../components"


const PortfolioPage = () => {
  return (
    <div id="portfolioHeroTitle">

        <HeroTitle
            logo = {ICONS.star}
            subtitle = "Navigating Computing Frontiers: A Comprehensive Portfolio of Our Varied Ventures." 
            color1="var(--dark)"
            color2="var(--primary)" 
            title = {{ 
                    emphasize: 'Computing ', 
                    remaining: 'Endeavors Showcase.' 
            }} 
        />

    </div>
    )
}

export default PortfolioPage