import Home from './Components/Home.js';
import WintertidePage from './Components/WintertidePage.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wintertide" element={<WintertidePage />} />
      </Routes>
    </Router>
  )
}

export default App;