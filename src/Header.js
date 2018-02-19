import React, { Component } from 'react';
import './Header.css';
import Terminal from "./Terminal.jsx";


class Header extends Component {
    render() {
        return (
            <header className="container-fluid container-terminal">
                <div className={"outer"}>
                    <div className={"top-terminal-bar "}>
                        <div class="fakeButtons fakeClose"></div>
                        <div class="fakeButtons fakeMinimize"></div>
                        <div class="fakeButtons fakeZoom"></div>

                    </div>
                    <div className={"screen"}>
                        <div className={"content"}>
                        <Terminal/>

                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;

