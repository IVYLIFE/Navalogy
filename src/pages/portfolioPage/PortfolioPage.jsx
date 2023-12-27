import { useLocation } from 'react-router-dom';
import { ICONS } from "../../assets";
import { HeroTitle } from "../../components";
import { projects } from '../../assets/data';

const PortfolioPage = () => {
  const location = useLocation();

  const project = location.state?.project || projects[0];


    console.log(location);
    console.log(location.state);
    console.log(project);

    return (
        <div id="portfolioHeroTitle">

            <HeroTitle
                logo={ICONS.star}
                subtitle="Navigating Computing Frontiers: A Comprehensive Portfolio of Our Varied Ventures."
                color1="var(--dark)"
                color2="var(--primary)"
                title={{
                    emphasize: 'Computing ',
                    remaining: 'Endeavors Showcase.'
                }}
            />

            <p>{project.title}</p>

        </div>
    )
}

export default PortfolioPage