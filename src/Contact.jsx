import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="container">
                    <h1 className="text-center pt-5 pb-3">Contact</h1>
                    <div className="row">
                        <div className={"col text-center"}>

                            <h4>Contact me about exciting opportunities in web development
                                at <a href={"mailto:info@solid-flow.com"} target="_blank">info@solid-flow.com</a> or
                                using the form below.
                            </h4>

                        </div>

                    </div>
                    <div className="row">
                        <div className={"col mw-700px mx-auto"}>

                            <form method="POST" action="https://formspree.io/info@solid-flow.com">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail">Email</label>
                                        <input type="email" className="form-control rounded-0" id="inputEmail" name="email"
                                               placeholder="Your email" required={true} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor={"inputName"}>Name</label>
                                        <input type="text" className="form-control rounded-0" id="inputName" name={'name'}
                                               placeholder="Your name" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inputMessage">Message</label>
                                    <textarea type="text" className="form-control rounded-0" id="inputMessage" name={'message'}
                                              placeholder="Your message" ></textarea>
                                </div>
                                <input type="hidden" name="_next" value="/thank_you" />
                                <div className="form-group text-center">
                                    <button className={"btn btn-outline-dark"} type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;