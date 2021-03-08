import './App.css';
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Homepage from './components/Homepage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Portfolio />
        <Contact />
        <Homepage />
  
      </header>
    </div>
  );
}

export default App;
