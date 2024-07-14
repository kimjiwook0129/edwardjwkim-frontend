import './App.css';
import { Greet } from './components/Greet';
import Nav from "./components/Nav/Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <Greet name="Edward Jiwook Kim"/>
    </div>
  );
}

export default App;
