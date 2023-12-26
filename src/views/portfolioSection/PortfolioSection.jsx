import { ICONS, IMAGES } from '../../assets'
import { Button, Glare, Title } from '../../components'
import './portfolioSection.css'

import { projects } from '../../assets/data'

const PortfolioSection = ( ) => {

  const title = projects[0].title
  const description = projects[0].short_description
  const projectImg = projects[0].image

  
  return (
    <div id='portfolioSection'>

      <img
        src={IMAGES.wave_2}
        style={{
          objectFit: 'cover',
        }}
      />

      <div id='portfolioContainer'>

        <Title
          title={{ emphasize: 'Innovation Showcase', remaining: '' }}
          subtitle='Unveiling Our Journey through Inspired Works.'
          color1='var(--primary)'
          color2='var(--dark)'
          style={{ fontWeight: '500' }}
          logo={ICONS.sun}
        />

        <div id="content">

          <div id="btnContainer">

            <Button
              text="All"
              type='gradientFilled'
            />
            <Button
              text="SDN"
              type='blueFilled'
            />

            <Button
              text="Cloud/Fog"
              type='blueFilled'
            />

            <Button
              text="Hardware"
              type='blueFilled'
            />

          </div>




          <div id="project">

            <div className="left">

              <div className="projectDetails">
                <h2>{title}</h2>
                <p className='text'>{description}</p>

                <Button
                  text='More Info'
                  style={{ width: 'clamp(10rem, 30vw, 10rem)' }}
                />
              </div>

            </div>

            <div className="right">

              <img src={projectImg} alt="" />
              <h2>{title}</h2>

              <Glare
                style={{
                  top: 0,
                  left: 0,
                  width:'clamp(20rem, 40vw, 60rem)',
                  height:'100%',
                  transform:'rotate(-24.784deg)',
                  borderRadius:'80.59419rem',
                  filter: 'blur(40px)',
                  background:'radial-gradient(62.17% 62.17% at 47.41% 54.69%, #FDD 27.6%, rgba(252, 252, 252, 0.08) 100%)',
                }}
                />
            </div>
          </div>





        </div>

      </div>
    </div>

  )
}

export default PortfolioSection