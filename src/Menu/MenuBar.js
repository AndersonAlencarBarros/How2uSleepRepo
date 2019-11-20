import React, {Component} from 'react';
import logo from './logo512.png';

class MenuBar extends Component{
    render(){
        return(
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h3 className="mainTitle">How2uSleep</h3>
            </div>
        );
    }
}

export default MenuBar
