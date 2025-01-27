import TechBadge from './TechBadge';
import '../Styles/carousel.scss';
import { FaGithub } from 'react-icons/fa';;

export default function ProjectSlide({title, techUsed, githubLink, footerText, img}) {
    return (
        <div className="slide slide-style">
            <img src={img} className="slide-pic"/>
            <div className="project-overlay">
                <div className="slide-header">
                    <div className="slide-title-and-tech">
                        {title}
                        <div className="tech-used">
                            {techUsed.map(thisTech => <TechBadge tech={thisTech} />)}
                        </div>
                    </div>
                    <div className="github-logo" onClick={() => window.open(githubLink, '_blank')}>
                        <FaGithub />
                    </div>
                </div>
                <div className="slide-footer">
                    {footerText}
                </div>
            </div>
        </div>
    );
}