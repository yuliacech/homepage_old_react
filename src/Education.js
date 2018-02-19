import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <section id="education">
                <div className="container">
                    <h1 className="text-center pt-5 pb-3">Education</h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={"container-certificate-outer"}>
                                <div className={"container-certificate-middle"}>
                                    <div className={"container-certificate-inner"}>
                                        <h3>M.A. in Computational Linguistics</h3>
                                        <p>
                                            Eberhard Karls University of Tübingen, Germany
                                        </p>
                                        <p>
                                            July 2014
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={"container-certificate-outer"}>
                                <div className={"container-certificate-middle"}>
                                    <div className={"container-certificate-inner"}>
                                        <h3>Diploma in Translation and Interpreting Studies</h3>
                                        <p>
                                            Khakass State N.F.-Katanov University, Russia
                                        </p>
                                        <p>
                                            July 2011
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Education;