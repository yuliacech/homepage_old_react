import React, { Component } from 'react';
import angularLogo from './assets/img/tech_logos/angular.svg';
import nodejsLogo from './assets/img/tech_logos/nodejs.svg';
import reactLogo from './assets/img/tech_logos/react.svg';
import javascriptLogo from './assets/img/tech_logos/javascript.svg';
import typescriptLogo from './assets/img/tech_logos/typescript.svg';
import mongodbLogo from './assets/img/tech_logos/mongodb.svg';

class Banner extends Component {

    render() {
        return (
            <section id={"banner"}>
                <div className={"container"}>
                    <h2 className={"text-center pt-5 pb-3"}>
                        Hi, I am Iuliia Ichin-Norbu. <br/>
                        As a full-stack web developer, I am
                        passionate about creating responsive,
                        interactive, modern web apps.
                    </h2>
                    <h1 className={"text-center pt-5 pb-3"}>Technologies</h1>
                    <div className={"row"}>
                        <div className={"col-sm-6 col-md-2"}>
                            <div className={"tech-logo h-100 m-auto p-4"}>
                                <img src={javascriptLogo} alt={"Logo of JavaScript programming language"}
                                title={"JavaScript"}/>
                            </div>
                        </div>
                        <div className={"col-sm-6 col-md-2"}>
                            <div className={"tech-logo h-100 m-auto p-2"}>
                                <img src={reactLogo} alt={"Logo of ReactsJS library"}
                                     title={"ReactJS"}/>
                            </div>
                        </div>
                        <div className={"col-sm-6 col-md-2"}>
                            <div className={"tech-logo h-100 m-auto p-2"}>
                                <img src={angularLogo} alt={"Logo of Angular framework"}
                                     title={"Angular"}/>
                            </div>
                        </div>
                        <div className={"col-sm-6 col-md-2"}>
                            <div className={"tech-logo h-100 m-auto p-4"}>
                                <img className={"img-fluid"} src={typescriptLogo}
                                     alt={"Logo of TypeScript programming language"} title={"TypeScript"}/>
                            </div>
                        </div>
                        <div className={"col-sm-6 col-md-2"}>
                            <div className={"tech-logo h-100 m-auto p-2"}>
                                <img className={"img-fluid"} src={nodejsLogo} alt={"Logo of NodeJS platform"}
                                     title={"NodeJS"}/>
                            </div>
                        </div>
                        <div className={"col-sm-6 col-md-2"}>
                            <div className={"tech-logo h-100 m-auto p-2"}>
                                <img className={"img-fluid"} src={mongodbLogo} alt={"Logo of MongoDB database"}
                                     title={"MongoDB"}/>
                            </div>
                        </div>
                    </div>

                    <div className={"row pt-3"}>
                        <div className={"col"}>
                            <p className={"text-center"}>
                                I work intensively
                                with <span className="tech-highlight">&nbsp;Angular&nbsp;</span>,&nbsp;
                                <span className="tech-highlight">&nbsp;TypeScript/JavaScript&nbsp;</span> and <span className="tech-highlight">&nbsp;NodeJS&nbsp;</span> and
                                implement websites used for clinical trials in breast cancer research.
                                <br/>
                                Be it at work or for my personal projects, I
                                like to test new tools and learn about advances in web development.
                                I used <span className="tech-highlight">&nbsp;React&nbsp;</span> to build this website. <br/>
                                I prefer modern web dev stacks, but I
                                also enjoyed working
                                with <span className="tech-highlight">&nbsp;PHP&nbsp;</span> and <span className="tech-highlight">&nbsp;Java&nbsp;</span> based
                                web projects in the past.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Banner;