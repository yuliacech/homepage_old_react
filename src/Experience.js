import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <section id="experience">
                <div className="container">
                    <h1 className="text-center pt-5 pb-3">Experience</h1>
                    <div className="row mb-3">
                        <div className="col-md-3">
                            April 2016 - present
                        </div>
                        <div className="col-md-9">
                            <a href={"https://ctsu.bordet.be"}>Jules Bordet Institute</a>, Belgium
                            <ul>
                                <li>
                                    development of web apps with <span className={"font-weight-bold"}>Angular, NodeJS + Express, PostgreSQL, PHP</span>
                                </li>
                                <li>
                                    <span className={"font-weight-bold"}>Project Lead</span> in selected production releases
                                </li>
                                <li>
                                    software maintenance, resolution of urgent production issues
                                </li>
                                <li>
                                    second line support in Research IT service desk
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-3">
                            July 2015 - March 2016
                        </div>
                        <div className="col-md-9">
                            <a className={""} href={"http://www.rhenus.com/en/"}>Rhenus SE & CO. KG</a>, Germany
                            <ul>
                                <li>
                                    development of logIQ, an enterprise application for inland and sea ports
                                </li>
                                <li>
                                    <span className={"font-weight-bold"}>Java EE, Spring, Hibernate, ZK framework, Maven</span>
                                </li>
                                <li>
                                    <span className={"font-weight-bold"}>JUnit, acceptance and web tests (Selenium)</span>
                                </li>
                                <li>
                                    agile environment: Scrum team
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            October 2014 - June 2015
                        </div>
                        <div className="col-md-9">
                            <a className={""} href={"https://www.plagscan.com/en/"}>PlagScan GmbH</a>, Germany
                            <ul>
                                <li>
                                    SaaS for plagiarism checking
                                </li>
                                <li>
                                    <span className={"font-weight-bold"}>improvements to the core algorithm</span> and citation
                                    detection mechanism <span className={"font-weight-bold"}>(Java)</span>
                                </li>
                                <li>
                                    selection of search queries for search engine and SOLR
                                </li>
                                <li>
                                    organization of webinars for prospective and/or new customers
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;