import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import { Routes, Route} from 'react-router-dom';
import About from "./pages/About/About";
import Terms from "./pages/Terms/Terms";
import Contact from "./pages/Contact/Contact"

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path= '/' element = { <Home /> } /> 
    <Route path= '/projects' element = { <Projects /> } /> 
    <Route path= '/about' element = { <About /> } /> 
    <Route path= '/Terms' element = { <Terms /> } />
    <Route path= '/contact' element = { <Contact /> } /> 

    
    </ Routes>
    <Footer />
    </>
  )
}

export default App;