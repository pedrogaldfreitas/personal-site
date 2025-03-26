import '../App.css';
import '../Styles/section-container.scss';
import '../Styles/main.scss'
import { useEffect, useState } from 'react';
import { ReactComponent as SFULogo } from '../Icons/sfuLogo.svg';
import { ReactComponent as AWSLogo } from '../Icons/AWSlogo.svg';
import { ReactComponent as ReactLogo } from '../Icons/React-icon.svg';
import { ReactComponent as CSharpLogo } from '../Icons/CsharpLogo.svg';
import { ReactComponent as NodeLogo } from '../Icons/nodeJSlogo.svg';
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import WaterRipple from './WaterRipple.js';
import Skills from './SkillsSection.js';
import ExperienceTimeline from './ExperienceTimeline';
import { Helmet } from 'react-helmet';
import MyCarousel from './MyCarousel.js';
import ContactCard from './ContactCard.js';

export default function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  const linkedInLink = "https://www.linkedin.com/in/freitasp/";
  const gitHubLink = "https://github.com/pedrogaldfreitas";

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);

    //Makes my name disappear from header when on the "ABOUT" section.
    const handleDisappearingName = () => {
      const headerName = document.querySelector('.my-name-header');
      const aboutSectionName = document.querySelector('.my-name');

      if (headerName && aboutSectionName) {
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
    };

    handleDisappearingName();

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    }

  }, [])

  const scrollToSection = (section) => {
    const sectionElement = document.getElementById(section);
    sectionElement.scrollIntoView({behavior: "smooth"});
  }

  return (
    <div className="App">
      <Helmet>
        <title>Pedro Freitas</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.png" />
      </Helmet>
      <div className="site-header">
        <div className="site-header_inner">
          {width > 1070 &&
            <div className="my-name-header">
              PEDRO FREITAS
            </div>
          }
          <div className="nav-menu">
            <div className="nav-link" onClick={() => scrollToSection("intro-screen")}>ABOUT</div>
            <div className="nav-link" onClick={() => scrollToSection("experience-section")}>EXPERIENCE</div>
            <div className="nav-link" onClick={() => scrollToSection("projects-section")}>PROJECTS</div>
            <div className="nav-link" onClick={() => scrollToSection("contact-section")}>CONTACT</div>
          </div>
        </div>
      </div>
      <WaterRipple />
      <div className='intro-screen' id="intro-screen">
        <div className='section-container container-bg'>
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
                    <div className='list-header'>Computing{width > 1242 ? " " : <br />}Systems</div>
                    <div className='list-item'>Operating Systems</div>
                    <div className='list-item'>Data Communications & Networking</div>
                    <div className='list-item'>Computer Architecture</div>
                  </div>
                  <div className='specialization-main-col two'>
                    <div className='list-header'>Theoretical{width > 1242 ? " " : <br />}Computing Science</div>
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
      <div className="experience-section" id="experience-section">
        <div className="section-container experience-and-skills-wrapper">
          <div className="experience-title-and-timeline-wrapper">
            <div className="section-title">
              EXPERIENCE
            </div>
            <div className="timeline">
              <ExperienceTimeline />
            </div>
          </div>
          <Skills />
        </div>
      </div>
      <div className="projects-section" id="projects-section">
        <div className="section-title projects">
          PROJECTS
        </div>
        <MyCarousel />
      </div>
      <div className="contact-section" id="contact-section">
        <div className="section-title">
          CONTACT
        </div>
        <div className="contact-section-middle">
          <ContactCard />
          <div className="linkedin-and-github-section">
            Connect With Me
            <div className="icons">
              <div className="icon" onClick={() => window.open(linkedInLink, '_blank')}>
                <FaLinkedin />
              </div>
              <div className="icon" onClick={() => window.open(gitHubLink, '_blank')}>
                <FaSquareGithub />
              </div>
            </div>
          </div>
        </div>
        <div className="resume-button">
          {/*View Resume*/}
        </div>
      </div>
      <div className="space"></div>
      <div className="site-footer">
        © 2025 Pedro Freitas
      </div>
    </div>
  );
}