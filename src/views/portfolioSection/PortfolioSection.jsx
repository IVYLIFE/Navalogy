import { useState, useEffect, useCallback } from 'react';
import { ICONS, IMAGES } from '../../assets';
import { projects } from '../../assets/data';
import { Button, Glare, Title } from '../../components';
import { Link } from 'react-router-dom';

import './portfolioSection.css';

const PortfolioSection = () => {
  const [project, setProject] = useState(null);
  const [selectedButton, setSelectedButton] = useState('All');

  // const currentProjectIndex = 0;

  useEffect(() => {
    showProjects('All');
  }, []);

  const handleButtonClick = useCallback((projectType) => {
    setSelectedButton(projectType);
    showProjects(projectType);
  }, []);

  const changeProject = useCallback((e) => {
    const { name } = e.target;
    const index = projects.indexOf(project);

    let newProject;
    if (name === 'prev') {
      newProject = projects[index === 0 ? projects.length - 1 : index - 1];
    } else {
      newProject = projects[index === projects.length - 1 ? 0 : index + 1];
    }

    animation();

    
    setProject(newProject);
    setSelectedButton(newProject.type);
  }, [project]);


  const animation = () => {
    console.log('animation');
    const projectImg = document.querySelector('.projectImg');

    projectImg.style.scale = '0';
    
    setTimeout(() => {
      projectImg.style.scale = '1';
    }, 200);




    // projectImg.style.animation = '';
    // projectImg.style.animation = 'fadeIn 0.5s ease-in-out';
    // projectImg.style.animationPlayState = 'running';

  }

  const showProjects = (type) => {
    const filteredProjects = type === 'All' ? projects : projects.filter(project => project.type === type);
    setProject(filteredProjects[0]);
  };

  const title = project?.title;
  const description = project?.short_description;
  const projectImg = project?.image;


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


          <div id="project" className='scrollBar'>

            <div className="left">

              <div className="projectDetails">
                <h2>{title}</h2>
                <p className='text'>{description}</p>

                <Link
                  to= {{
                    pathname : '/portfolio',
                    search: `?id=${project?.id}`,
                  }}
                  state = {project}
                  
                  style={{ textDecoration: 'none' }}
                >
                  <Button text='More Info'/>
                </Link>

              </div>

            </div>

            <div className="right">

              <img src={projectImg} alt="projectImg" className='projectImg'  />
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

      </div>
    </div>

  )
}

export default PortfolioSection