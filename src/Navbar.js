import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import githubLogo from './assets/img/contact/github.svg';
import twitterLogo from './assets/img/contact/twitter.svg';
import emailLogo from './assets/img/contact/email.svg';
import cvIcon from './assets/img/contact/cv.svg';
import linkedinLogo from './assets/img/contact/linkedin.svg';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {active: ''};
    }
    handleClick(link, event) {
        this.setState({active: link});
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark default-primary-color sticky-top" id="navbar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse centered-navbar" id="navbarSupportedContent">
                    <Scrollspy className="navbar-nav mr-auto"
                               items={ ['banner', 'experience', 'projects', 'education', 'skills', 'about', 'contact'] }
                               currentClassName="active">
                        <li className={"nav-item"}>
                            <a className={"nav-link"} href="#banner">Technologies</a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link"} href="#experience">Experience</a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link"} href="#projects">Projects</a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link"} href="#education">Education</a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link"} href="#skills">Skills</a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link"} href="#about">About</a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link"} href="#contact">Contact</a>
                        </li>
                    </Scrollspy>
                    <ul className="navbar-nav mr-auto">
                        <li className={"nav-item"}>
                            <a aria-label="GitHub Profile"
                               className="nav-link"
                               href="https://github.com/solid-flow"
                               aria-disabled="false"
                               target="_blank"
                               rel="noopener noreferrer">
                                <span className="">
                                    <img alt="GitHub Logo" className="contact-logo" src={githubLogo}/>
                                </span>
                            </a>
                        </li>
                        <li className={"nav-item"}>
                            <a aria-label="Twitter Profile"
                               className="nav-link"
                               href="https://twitter.com/solid_flow_com"
                               aria-disabled="false"
                               target="_blank"
                               rel="noopener noreferrer">
                                <span className="">
                                    <img alt="Twitter Logo" className="contact-logo" src={twitterLogo}/>
                                </span>
                            </a>
                        </li>
                        <li className={"nav-item"}>
                            <a aria-label="LinkedIn Profile"
                               className="nav-link"
                               href="https://www.linkedin.com/in/ichinnorbu/"
                               aria-disabled="false"
                               target="_blank"
                               rel="noopener noreferrer">
                                <span className="">
                                    <img alt="LinkedIn Logo" className="contact-logo" src={linkedinLogo}/>
                                </span>
                            </a>
                        </li>

                        <li className={"nav-item"}>
                            <a aria-label="CV download link"
                               className="nav-link"
                               href="CV_Ichin-Norbu.pdf"
                               aria-disabled="false">
                                <span className="">
                                    <img alt="CV download icon" className="contact-logo" src={cvIcon}/>
                                </span>
                            </a>
                        </li>
                        <li className={"nav-item"}>
                            <a aria-label="Email link"
                               className="nav-link"
                               href="mailto:info@solid-flow.com"
                               aria-disabled="false"
                               target="_blank"
                               rel="noopener noreferrer">
                                <span className="">
                                    <img alt="Email Logo" className="contact-logo" src={emailLogo}/>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;