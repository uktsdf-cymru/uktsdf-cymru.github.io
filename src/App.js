import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Instructors from './components/Instructors';
import Home from './components/Home';
import Classes from './components/Classes'

function App() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/team" element={<Instructors/>} />
                    <Route path="/classes" element={<Classes/>} />
                    <Route path="/contact" element={<Home/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
