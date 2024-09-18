import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import Summary from './components/Summary/Summary';
import TechExperience from './components/TechExperience/TechExperience';
import OtherExperience from './components/OtherExperience/OtherExperience';
import Specification from './components/Specification/Specification';
import Education from './components/Education/Education';
import Project from './components/Project/Project';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import { ThemeProvider } from './components/ThemeContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import menuData from './menu.json';

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
                <Route path="/techexperience" element={<TechExperience />} />
                <Route path="/otherexperience" element={<OtherExperience />} />
                <Route path="/numericalspecifications" element={<Specification />} />
                <Route path="/projectsandpublication" element={<Project />} />
                <Route path="/education" element={<Education />} />
              </Routes>
              <MenuIcons />
            </div>
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

function MenuIcons() {
  const { language } = useLanguage();

  return (
    <div className="menu-icons-container">
      {menuData.menu.map((item, index) => (
        <Link to={item.option === "Home" ? "/" : `/${item.option.toLowerCase().replace(/ /g, '-')}`} key={index}>
          <div className="menu-icon-circle">
            <span className="menu-tooltip">
              {language === 'en' ? item['en-topic'] : item['ko-topic']}
            </span>
            <img src={item.image} alt={item.option} className="menu-icon" />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default App;
