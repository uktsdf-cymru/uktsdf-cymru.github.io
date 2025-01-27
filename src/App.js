import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

import ScrollToTop from './components/ScrollToTop';

import Home from './components/Home';
import About from './components/About'
import Instructors from './components/Instructors';
import Gallery from './components/Gallery'
import Classes from './components/Classes'
import Library from './components/Library'
import Contact from './components/Contact'
import Quiz from './components/Quiz'

function App() {
    return (
        <div id="outer-container">
            <Router>
                <ScrollToTop />
                <div className="App">
                    <NavBar />
                    <div id="page-wrap">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="team" element={<Instructors />} />
                            <Route path="gallery" element={<Gallery />} />
                            <Route path="classes" element={<Classes />} />
                            <Route path="library" element={<Library />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="library/quiz" element={<Quiz />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}

export default App;
