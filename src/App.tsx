import './App.css';
import Nav from "./components/Nav/Nav"
import Summary from './components/Summary/Summary';
// import WorkExperience from './components/WorkExperience/WorkExperience';
// import Education from './components/Education/Education';
// import Scraper from './components/Scraper';
import { LanguageProvider } from './components/LanguageContext';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
      <LanguageProvider>
      <Nav />
      <div className="body">
        <Summary />
      </div>
      </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
