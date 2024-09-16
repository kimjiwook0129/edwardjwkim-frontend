import './App.css';
import Nav from "./components/Nav/Nav";
import Summary from './components/Summary/Summary';
import TechExperience from './components/TechExperience/TechExperience';
import OtherExperience from './components/OtherExperience/OtherExperience';
import Specification from './components/Specification/Specification';
import Project from './components/Project/Project';
import { LanguageProvider } from './components/LanguageContext';
import { ThemeProvider } from './components/ThemeContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <LanguageProvider>
          <Router>
            <Nav />
            <div className="body">
              <Routes>
                <Route path="/" element={<Summary />} />
                <Route path="/tech-experience" element={<TechExperience type="tech" />} />
                <Route path="/other-experience" element={<OtherExperience type="other" />} />
                <Route path="/specification" element={<Specification />} />
                <Route path="/project" element={<Project />} />
              </Routes>
              <div className="buttons-container">
                <Link to="/"><button>Home</button></Link>
                <Link to="/tech-experience"><button>Tech Experience</button></Link>
                <Link to="/other-experience"><button>Other Experience</button></Link>
                <Link to="/specification"><button>Specifications</button></Link>
                <Link to="/project"><button>Projects & Publication</button></Link>

              </div>
            </div>
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
