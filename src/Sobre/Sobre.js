import React, { Component } from 'react';
import './Sobre.css';
import MenuBar from '../Menu/MenuBar';

class Sobre extends Component{
    render() {
        return (
            <div>
                <div>
                    <MenuBar />
                </div>
                <div id="sobreDiv">
                    <h1 id="sobreTitle">Sobre</h1>
                </div>
            </div>
        );
    }
}

export default Sobre;