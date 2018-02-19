import React, { Component } from 'react';
import brushipScreenshot from './assets/img/projects/bruship.png';
import premiumFlowScreenshot from './assets/img/projects/premium_flow.png';
import compoundGameScreenshot from './assets/img/projects/compound_game.png';

class Projects extends Component {
    render() {
        return (
            <section id="projects">
                <div className="container">
                    <h1 className="text-center pt-5 pb-3">Projects</h1>
                    <div className="row mb-5 pb-3">
                        <div className="col-md-6 order-md-2">
                            <h2><a href={"http://bruship.solid-flow.com"}>Bruship</a></h2>
                            <p>
                                This prototype website for an accommodation review system is built
                                with MEAN stack (MongoDB, Express JS server, Angular and NodeJS) and Auth0 for
                                user management. Make sure to login and try it out!
                            </p>
                            <p>
                                <a className={"btn btn-outline-dark"} role={"button"}
                                   href={"http://bruship.solid-flow.com"}>See live demo</a>
                            </p>
                            <p>
                                <a className={"btn btn-outline-dark"} role={"button"}
                                   href={"https://github.com/solid-flow/bruship"}>Frontend code</a>
                            </p>
                            <p>
                                <a className={"btn btn-outline-dark"} role={"button"}
                                   href={"https://github.com/solid-flow/bruship-server"}>Backend code</a>
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className={"project-screenshot"}>
                                <img className={"img-fluid"} src={brushipScreenshot} alt={"Screenshot of Bruship web app"}/>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5 pb-3">
                        <div className="col-md-6 order-md-2">
                            <h2><a href={"http://premium-flow.com"}>Premium Flow</a></h2>
                            <p>
                                I set up a hosting, installed Wordpress and adapted Shadower theme
                                in terms of colors, displayed elements and custom layout.
                            </p>
                            <p>
                                Currently, I am creating an individualised  Wordpress theme from scratch that uses
                                Bootstrap 4 and gives more functionality to the client.
                            </p>
                        </div>
                        <div className="col-md-6 ">
                            <div className={"project-screenshot"}>
                                <img className={"img-fluid"} src={premiumFlowScreenshot} alt={"Screenshot of Premium Flow blog"}/>
                            </div>
                        </div>
                    </div>
                    <div className="row container-project">
                        <div className="col-md-6 order-md-2">
                            <h2><a href={"http://compound-game.solid-flow.com/"}>Compound game</a></h2>
                            <p>
                                Five years ago, I created this online game as part of my Master's thesis at
                                the University of Tübingen, Germany. I used
                                gamification to collect linguistics data from students about German compound words.
                            </p>
                            <p>
                                It is built with melonJS library and
                                uses HTML5 <code>&lt;canvas&gt;</code> element to draw the sprite graphics.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className={"project-screenshot"}>
                                <img className={"img-fluid"} src={compoundGameScreenshot} alt={"Screenshot of compound game"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;