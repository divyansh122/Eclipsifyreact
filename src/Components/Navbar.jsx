import React from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import Home from './Home'
import SolarEclipse from './Solareclipse.jsx'
import LunarEclipse from './Lunareclipse.jsx'
import MarsEclipse from './MarsEclipse.jsx'
import JupiterEclipse from './JupiterEclipse.jsx'
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
export default function Navbar() {
  return (
  <Router>
    <div>
       <nav>
        <div class="container nav-wrapper">  
        <Link to="/Home">
            <div class="brand">
                <img src={logo} class="logoimage" alt=""/>
            </div></Link>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav-list">
                <li>
                    <Link to="/solareclipse" data-aos="fade-up">Solar Eclipse</Link>
                </li>
                <li><Link to="/lunareclipse">Lunar Eclipse</Link></li>
                <li>
                    <Link to="/marseclipse">Mars Eclipse</Link>
                </li>
                <li><Link to="jupitereclipse">Jupiter Eclipse</Link></li>
                <li><Link to="download">Download the app</Link></li>
            </ul>
        </div>
    </nav>
    <Routes>
                <Route path="/solareclipse" element={<SolarEclipse />} />
                <Route path="/lunareclipse" element={<LunarEclipse />} />
                <Route path="/marseclipse" element={<MarsEclipse />} />
                <Route path="/jupitereclipse" element={<JupiterEclipse />} />
                <Route path="/download" element={<Home />} />
                <Route path="/Home" element={<Home />} />
    </Routes>

    </div>
    </Router>

  )
}
