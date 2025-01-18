import './App.css';
import './Styles/section-container.scss';
import './Styles/main.scss'

function App() {
  return (
    <div className="App">
      <div className="site-header">
        <div className="site-header_inner">
          <div className="my-name-header">
            PEDRO FREITAS
          </div>
          <div className="nav-menu">
            <div className="nav-link">ABOUT</div>
            <div className="nav-link">EXPERIENCE</div>
            <div className="nav-link">PROJECTS</div>
            <div className="nav-link">CONTACT</div>
          </div>
        </div>
      </div>
      <div className='intro-screen'>
        <div className='section-container'>
          <div className='my-name'>PEDRO FREITAS</div>
          <div className='my-summary'>A skilled and dedicated software developer based in Vancouver, BC with professional experience in both front-end and back-end development. ‍Proficient in modern web technologies such as React, TypeScript, Node.js, and AWS, I excel at designing and implementing scalable, user-centric applications. My experience consists of delivering impactful features, optimizing performance, and collaborating across teams to meet project goals.</div>
          <div className='my-education'>Insert education stuff here</div>
        </div>
      </div>
    </div>
  );
}

export default App;
