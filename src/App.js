import logo from './tsd-c_logo.jpg';
import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
          <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
      </header>
      <Footer />
    </div>
  );
}

export default App;
