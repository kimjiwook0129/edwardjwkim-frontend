import './App.css';
import Nav from "./components/Nav/Nav"
import Summary from './components/Summary/Summary';
import WorkExperience from './components/WorkExperience/WorkExperience';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="body">
        <Summary />
        <WorkExperience title="Technical Experience" type="technical"/>
        <WorkExperience title="Other Experience" type="other"/>
      </div>
    </div>
  );
}

export default App;
