import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FaProjectDiagram, FaGraduationCap } from 'react-icons/fa';
import { MdWork } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";
import 'react-vertical-timeline-component/style.min.css';
import '../Styles/experience-timeline.scss'

const ExperienceTimeline = () => {
    
    
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{background: '#290b4d', color: '#fff'}} 
                icon={<GiDiploma />}  
            >
                <p className="event-date">June 2024</p>
                <h3 className="vertical-timeline-element-title">Graduated</h3>
                <h4 className="vertical-timeline-element-subtitle">from Simon Fraser University</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{background: '#290b4d', color: '#fff'}} 
                icon={<MdWork />}  
            >
                <p className="event-date">May 2022-December 2022</p>
                <h3 className="vertical-timeline-element-title">Web Application Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Co-op @ Celayix Software</h4>
                <ul className="vertical-timeline-element-info bullet-list">
                    <li className="timeline-list-item">Developed maintainable React solutions focusing on function implementation through clear, concise TypeScript structures.</li>
                    <li className="timeline-list-item">Designed and modified Redux stores, reducers, and actions for seamless state management, using Node.js for reliable backend connectivity and enhanced application performance.</li>
                    <li className="timeline-list-item">Reduced complexity in component management by unifying repetitive implementations and utilizing variable parameters.</li>
                    <li className="timeline-list-item">Boosted performance by 75% through optimization of state management systems and API interactions.</li>
                    <li className="timeline-list-item">Developed extensive layout adjustments through efficient CSS practices, boosting component flexibility and user satisfaction.</li>
                    <li className="timeline-list-item">Elevated application stability through AWS S3 testing and debugging of storage components.</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{background: '#290b4d', color: '#fff'}} 
                icon={<FaProjectDiagram  />}  
            >
                <p className="event-date">September 2021-December 2021</p>
                <h3 className="vertical-timeline-element-title">The Baytree Centre Portal Project</h3>
                <h4 className="vertical-timeline-element-subtitle">fell just short of first place</h4>
                <ul className="vertical-timeline-element-info bullet-list">
                    <li className="timeline-list-item">Engineered a stable and efficient backend in TypeScript for a React application utilizing Express for route handling and Axios for HTTP requests</li>
                    <li className="timeline-list-item">Enhanced security protocols through comprehensive JWT implementation and authentication layers.</li>
                    <li className="timeline-list-item">Engineered all necessary application schemas and CRUD operation features using Mongoose JS to facilitate efficient data handling and storage in a MongoDB database.</li>
                    <li className="timeline-list-item">Enhanced collaboration through active meeting participation, strategic implementation of feedback, and code evaluations on GitHub to sustain a well-structured scrum team.</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{background: '#290b4d', color: '#fff'}} 
                icon={<MdWork />}  
            >
                <p className="event-date">May 2021-August 2021</p>
                <h3 className="vertical-timeline-element-title">Software Developer/Tester</h3>
                <h4 className="vertical-timeline-element-subtitle">Co-op @ Torus Biomedical Solutions</h4>
                <ul className="vertical-timeline-element-info bullet-list">
                    <li className="timeline-list-item">Developed comprehensive user guides and technical manuals for streamlined team reference.</li>
                    <li className="timeline-list-item">Spearheaded the creation of a robust testing panel by detailing cases in spreadsheets and associated configuration files, which optimized the testing workflow.</li>
                    <li className="timeline-list-item">Automated the process of examining variables and functions with C#, which cut down time spent in manual debugging by 30%.</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{background: '#290b4d', color: '#fff'}} 
                icon={<FaGraduationCap />}  
            >
                <p className="event-date">September 2018</p>
                <h3 className="vertical-timeline-element-title">Began Courses</h3>
                <h4 className="vertical-timeline-element-subtitle">at Simon Fraser University</h4>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

export default ExperienceTimeline;