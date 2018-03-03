import React, { Component } from 'react';
import './App.css';
import { Route} from 'react-router-dom'

import Main from "./Main";
import ThankYou from "./ThankYou";

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Route exact path="/" component={Main}/>
                    <Route path="/thank_you" component={ThankYou}/>
                </div>
            </div>
        );
    }
}

export default App;
