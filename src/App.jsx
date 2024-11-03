import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Landingpage from './pages/Landingpage';
import Navbar from './pages/Navbar';
import Repopage from './pages/Repopage'; 
import Footer from './pages/Footer';

import Dashboardpage from './pages/Dashboardpage';
import Dashboard from './components/Dashboard'; 

import ContactPage from './pages/ContactPage';
import AboutUs from './pages/AboutUs';

function App() {
  console.log(window.location.pathname)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/repo" element={<Repopage />} />
        <Route path="/dashboard" element={<Dashboardpage></Dashboardpage>} />
        <Route path='/contact' element={<ContactPage></ContactPage>}/>
        <Route path="/about" element={<AboutUs></AboutUs>}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
