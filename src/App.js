import React, { Component } from 'react';
import './App.css';

import Header from "./Header";
import Navbar from './Navbar';
import Banner from './Banner';
import Experience from './Experience';
import Projects from "./Projects";
import Education from "./Education";
import Skills from './Skills';
import About from "./About";
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Navbar/>
                <Banner/>
                <Experience/>
                <Projects/>
                <Education/>
                <Skills/>
                <About/>
                <Contact/>
                <Footer/>

            </div>
        );
    }
}

export default App;
