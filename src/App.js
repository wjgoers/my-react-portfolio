import './App.css';
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Homepage from './components/Homepage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <AboutMe />
        <Portfolio />
        <Contact />
        <Homepage />
        <Footer />
        
  
      </header>
    </div>
  );
}

export default App;
