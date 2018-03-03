import React, { Component } from 'react';



class ThankYou extends Component {
    render() {
        const url = window.location.protocol + '//' + window.location.host + '#projects';
        return (

            <div>
                <section>
                    <div className="container">
                        <h1 className="text-center pt-5 pb-3">
                            Thank you for reaching out!
                        </h1>
                        <h5 className="text-center ">
                            I received your message and will get back to you shortly. <br/>
                            In the meantime you can have a look at &nbsp;
                            <a className={"btn btn-outline-dark"} role={"button"}
                               href={url}>MY PROJECTS</a>
                        </h5>
                    </div>
                </section>

            </div>

        );
    }
}

export default ThankYou;


