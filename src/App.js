import './App.css';
import './Styles/section-container.scss';
import './Styles/main.scss'
import { useEffect, useState } from 'react';
import { ReactComponent as SFULogo } from './Icons/sfuLogo.svg';
import { ReactComponent as AWSLogo } from './Icons/AWSlogo.svg';
import { ReactComponent as ReactLogo } from './Icons/React-icon.svg';
import { ReactComponent as CSharpLogo } from './Icons/CsharpLogo.svg';
import { ReactComponent as NodeLogo } from './Icons/nodeJSlogo.svg';
import WaterRipple from './WaterRipple';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);

    //Makes my name disappear from header when on the "ABOUT" section.
    const handleDisappearingName = () => {
      const headerName = document.querySelector('.my-name-header');
      const aboutSectionName = document.querySelector('.my-name');

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            headerName.classList.remove('visible');
          } else {
            headerName.classList.add('visible');
          }
        },
        {
          threshold: 0.1
        }
      );

      observer.observe(aboutSectionName);

      return () => observer.disconnect();
    }

    handleDisappearingName();
    //document.addEventListener("DOMContentLoaded", handleDisappearingName);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    }

  }, [])

  return (
    <div className="App">
      <div className="site-header">
        <div className="site-header_inner">
          {width > 1070 &&
            <div className="my-name-header">
              PEDRO FREITAS
            </div>
          }
          <div className="nav-menu">
            <div className="nav-link">ABOUT</div>
            <div className="nav-link">EXPERIENCE</div>
            <div className="nav-link">PROJECTS</div>
            <div className="nav-link">CONTACT</div>
          </div>
        </div>
      </div>
      <WaterRipple />
      <div className='intro-screen'>
        <div className='section-container'>
        <div className='name-summary-and-icons-wrapper'>
          <div className='name-and-summary-wrapper'>
            <div className='my-name'>PEDRO FREITAS</div>
            <div className='my-summary-wrapper'>
              <div className='my-summary'>
                A skilled and dedicated software developer based in Vancouver, BC 
                with professional experience in both front-end and back-end development. ‍
                <br/><br/>
                Proficient in modern web technologies such as React, TypeScript, Node.js, 
                and AWS, I excel at designing and implementing scalable, user-centric applications. 
                My experience consists of delivering impactful features, optimizing performance, and 
                collaborating across teams to meet project goals.
              </div>
            </div>
          </div>
          {width > 1090 &&
            <div className="floating-icons-container">
              <div className="icons-col">
                <div className='hovering-icon one'>
                  <CSharpLogo />
                </div>
                <div className='hovering-icon two'>
                  <NodeLogo />
                </div>
              </div>
              <div className="icons-col">
                <div className='hovering-icon three'>
                  <AWSLogo />
                </div>
                <div className='hovering-icon four'>
                  <ReactLogo />
                </div>
              </div>
            </div>
          }
        </div>
          <div className='my-education'>
            <div className='my-education_header'>
              Education
            </div>
            <div className='my-education_inner'>
              <div className='my-education_cont-1'>
                <div className='text-info'>
                  {/** Computer science major, bachelor of science, etc */}
                  <div className='one'>Computer Science Major</div>
                  <div className='two'>Bachelor of Science</div>
                  <div className='three'>Simon Fraser University 
                  <br />2018-2024</div>
                </div>
                <div className='sfu-logo'>
                  {/** SFU svg logo */}
                  {(width > 1340 || (width <= 915 && width >= 400)) && <SFULogo className="sfuLogo"/>}
                </div>
              </div>
              <div className='my-education_cont-2'>
                {/** Specialization section */}
                <div className='specialization-text'>Specialization</div>
                <div className='specialization-main'>
                  {/** Specialization info */}
                  <div className='specialization-main-col one'>
                    <div className='header'>Computing{width > 1242 ? " " : <br />}Systems</div>
                    <div className='list-item'>Operating Systems</div>
                    <div className='list-item'>Data Communications & Networking</div>
                    <div className='list-item'>Computer Architecture</div>
                  </div>
                  <div className='specialization-main-col two'>
                    <div className='header'>Theoretical{width > 1242 ? " " : <br />}Computing Science</div>
                    <div className='list-item'>Data Structures & Algorithms</div>
                    <div className='list-item'>Design & Analysis of Computing Algorithms</div>
                  </div>
                </div>
                <div className='specialization-footer'>
                  + Database Systems, Software Development Methods, Requirements Engineering
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
