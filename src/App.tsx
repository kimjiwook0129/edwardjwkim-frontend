import './App.css';
import Nav from "./components/Nav/Nav"
import Summary from './components/Summary/Summary';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';
import Scraper from './components/Scraper';
import Footer from './components/Footer/Footer';
import { LanguageProvider } from './components/LanguageContext';


function App() {
  return (
    <div className="App">
      <LanguageProvider>
      <Nav />
      <div className="body">
        <Summary />
        <WorkExperience  type="technical"/>
        <WorkExperience  type="other"/>
        <Education />
        <WorkExperience type="projects" />
        {/* <Scraper /> */}
      </div>
      <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;
