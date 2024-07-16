import './App.css';
import Nav from "./components/Nav/Nav"
import Summary from './components/Summary/Summary';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Scraper from './components/Scraper';
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
        {/* <Scraper /> */}
      </div>
      </LanguageProvider>
    </div>
  );
}

export default App;
