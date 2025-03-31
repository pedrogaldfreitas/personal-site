import TechBadge from './TechBadge';
import '../Styles/carousel.scss';
import { FaGithub, FaPlayCircle } from 'react-icons/fa';;

export default function ProjectSlide({title, techUsed, githubLink, footerText, img, playable=false, playableText='', onClickPlay = () => {}}) {
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
                {playable && 
                    <div className="slide-center" onClick={onClickPlay}>
                        <FaPlayCircle className="icon"/>
                        <div className="playable-text">{playableText}</div>
                    </div>
                }
                <div className="slide-footer">
                    {footerText}
                </div>
            </div>
        </div>
    );
}