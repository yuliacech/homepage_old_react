import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="container">
                    <h1 className="text-center pt-5 pb-3">Contact</h1>
                    <div className="row">
                        <div className={"col"}>
                            <p>
                                <h4>Contact me about exciting opportunities in web development
                                    at <a href={"mailto:info@solid-flow.com"} target="_blank">info@solid-flow.com</a>
                                </h4>
                            </p>
                        </div>

                    </div>
                    <div className="row">
                        <div className={"col"}>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;