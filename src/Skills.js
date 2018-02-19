import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <section id="skills">
                <div className="container">
                    <h1 className={"text-center pt-5 pb-3"}>Personal Skills</h1>
                    <div className="row">
                        <div className="col-sm-6">
                            <h3 className={"text-center"}>Languages</h3>
                            <ul>
                                <li>
                                    <div className="progress">
                                        <div className="progress-bar default-primary-color russian">Russian</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="progress">
                                        <div className="progress-bar default-primary-color english">English</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="progress">
                                        <div className="progress-bar default-primary-color german">German</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="progress">
                                        <div className="progress-bar default-primary-color czech">Czech</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="progress">
                                        <div className="progress-bar default-primary-color french">French</div>
                                    </div>
                                </li>
                            </ul>
                        </div><div className="col-sm-6">
                        <h3 className={"text-center"}>Awards</h3>
                        <ul>
                            <li className={"text-center"}>
                                <p>
                                2011
                                <br/>
                                DAAD/German Academic Exchange Service Master's degree scholarship
                                </p>

                            </li>
                            <li className={"text-center"}>
                                <p>
                                2017
                                <br/>
                                Diversity scholarship
                                    at <a href={"https://www.angularconnect.com/"}> AngularConnect</a> conference
                                </p>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;