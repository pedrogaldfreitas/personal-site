import '../App.css';
import '../Styles/section-container.scss';
import '../Styles/main.scss'
import '../Styles/skills.scss'
import SkillBar from './SkillBar';
import { useRef } from 'react';
import { useInView } from "framer-motion"; 

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, {threshold: 0.3, triggerOnce: false});

    return (
        <div ref={ref} className='container-bg skills-section-container'>
            <div className='header'>
                Skills
            </div>
            <div className='skills-section-inner'>
                <div className='skill-type-container'>
                    <div className='skills-header'>
                        Languages
                    </div>
                    <SkillBar skill="JavaScript" level={95} inView={isInView}/>
                    <SkillBar skill="TypeScript" level={95} inView={isInView}/>
                    <SkillBar skill="C#" level={95} inView={isInView}/>
                    <SkillBar skill="C++" level={85} inView={isInView}/>
                    <SkillBar skill="Java" level={85} inView={isInView}/>
                    <SkillBar skill="Python" level={80} inView={isInView}/>
                </div>
                <div className='skill-type-container'>
                    <div className='skills-header'>
                        Tools
                    </div>
                    <SkillBar skill="React" level={95} inView={isInView}/>
                    <SkillBar skill="Git" level={93} inView={isInView}/>
                    <SkillBar skill="Node.js" level={90} inView={isInView}/>
                    <SkillBar skill="SQL" level={87} inView={isInView}/>
                    <SkillBar skill="FastAPI" level={85} inView={isInView}/>
                    <SkillBar skill="AWS" level={80} inView={isInView}/>
                    <SkillBar skill="Docker" level={75} inView={isInView}/>
                </div>
                <div className='skill-type-container'>
                    <div className='skills-header'>
                        Others
                    </div>
                    <SkillBar skill="Portuguese" level={100} inView={isInView}/>
                    <SkillBar skill="Spanish" level={75} inView={isInView}/>
                    <SkillBar skill="French" level={60} inView={isInView}/>
                </div>
            </div>
        </div>
    )
}