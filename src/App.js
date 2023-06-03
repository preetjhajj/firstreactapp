import React from 'react'
import './Component/style.css'
import Header from './Component/Header.js'
import Footer from './Component/Footer.js'
import Home from './Component/Home'
import About from './Component/About'
import Portfolio from './Component/Portfolio'
import Contact from './Component/Contact'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <>
    <Router>
        <Header/>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/portfolio" element={<Portfolio/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
    </Router>
     <Footer/>
    
    </>
  )
}
export default App