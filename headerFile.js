import logo from "./src/todopostit.png";
import React, {Component} from 'react';

class headerFile extends Component {
    render() {
        return (

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.state.appTitle}</h1>
                </header>
            </div>
        )
    }
}
export default headerFile