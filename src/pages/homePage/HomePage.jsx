import React from 'react'
import { Button, Header, HeroImageContainer } from '../../components'

const HomePage = () => {
  return (
    <>

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

        <Button 
          id = "ctaBtn-2" 
          text = "Dive Deeper" 
          color =  "var(--light)" 
          bcgColor = "var(--dark)"
          style = {{ display: 'block', margin: '0 auto' }}
        />

      </div>

      <HeroImageContainer/>

    </>
  )
}

export default HomePage