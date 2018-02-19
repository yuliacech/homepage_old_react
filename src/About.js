import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="container">
                    <h1 className="text-center pt-5 pb-3">About</h1>
                    <h3>Dev</h3>
                    <p>
                        I do my best to follow <span className="tech-highlight">&nbsp;SOLID&nbsp;</span> principles of object-oriented design and
                        to control the correct <span className="tech-highlight">&nbsp;FLOW&nbsp;</span> of my programs with automated tests.
                        For critical, highly functional parts of my code, I turn to TDD.
                        I believe in clean code and will never stop learning.
                    </p>

                    <h3>Life</h3>
                    <p>
                        Originally from Russia, I completed my master's degree in Computational Linguistics at
                        the University of Tübingen in Germany. I worked in Germany for 2 years, before relocating to
                        Belgium with my partner. At the moment, we are planning our next adventurous move.
                    </p>
                    <h3>Goal</h3>
                    <p>
                        <h5>
                        In my day-to-day job, I appreciate the opportunity
                        of implementing
                        useful programs that help people do their job and
                        make their life easier.
                        With my skills as software developer, I would like to
                        impact community in a positive way.
                        </h5>
                    </p>
                </div>
            </section>
        );
    }
}

export default About;