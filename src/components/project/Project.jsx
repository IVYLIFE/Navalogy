import React from 'react'
import Glare from '../ui/glare/Glare'
import Button from '../button/Button'

const Project = ({ title, description, projectImg }) => {
    return (
        <div id="content">

            <div id="btnContainer">
                <Button
                    text="All"
                    type={selectedButton === 'All' ? 'gradientFilled' : 'blueFilled'}
                    onClick={() => handleButtonClick('All')}
                />
                <Button
                    text="SDN"
                    type={selectedButton === 'SDN' ? 'gradientFilled' : 'blueFilled'}
                    onClick={() => handleButtonClick('SDN')}
                />
                <Button
                    text="Cloud/Fog"
                    type={selectedButton === 'Cloud/Fog' ? 'gradientFilled' : 'blueFilled'}
                    onClick={() => handleButtonClick('Cloud/Fog')}
                />
                <Button
                    text="Hardware"
                    type={selectedButton === 'Hardware' ? 'gradientFilled' : 'blueFilled'}
                    onClick={() => handleButtonClick('Hardware')}
                />
            </div>


            <div id="project" >

                <div className="left">

                    <div className="projectDetails">
                        <h2>{title}</h2>
                        <p className='text'>{description}</p>

                        <Link
                            to={{
                                pathname: '/portfolio',
                                // Send a random object of letters
                                

                               
                            }}
                            style={{ textDecoration: 'none' }}
                        >
                            <Button text='More Info' />
                        </Link>

                    </div>

                </div>

                <div className="right">

                    <img src={projectImg} alt="projectImg" className='projectImg' />
                    <h2>{title}</h2>

                    <Glare
                        style={{
                            top: 0,
                            left: 0,
                            width: 'clamp(20rem, 40vw, 60rem)',
                            height: '100%',
                            transform: 'rotate(-24.784deg)',
                            borderRadius: '80.59419rem',
                            filter: 'blur(40px)',
                            background: 'radial-gradient(62.17% 62.17% at 47.41% 54.69%, #FDD 27.6%, rgba(252, 252, 252, 0.08) 100%)',
                        }}
                    />

                    <div className="controls">
                        <div className='prevBtn control' onClick={changeProject} >
                            <img src={ICONS.chevronUnFilled} alt="" />
                        </div>

                        <div className='nextBtn control' onClick={changeProject} >
                            <img src={ICONS.chevronUnFilled} alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Project