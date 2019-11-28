import React, { Component } from 'react';
import './Sobre.css'; 
import { Link } from 'react-router-dom'
import logo from '../Menu/logo512.png';

function MenuBar(){
    return(
            <div className="App-header">
                <ul className="menuBar">
                    <Link to="/">
                        <li className="itemLeft">
                            <img src={logo} className="App-logo" alt="logo" />
                        </li>
                    </Link>
                    
                    <li className="itemLeft">
                        <h3 className="mainTitle">How2uSleep</h3>
                    </li>
                </ul>
            </div>
    );
}

class Sobre extends Component{
    render() {
        return (
        <div>    
            <MenuBar />            
            <div id="sobreDiv">
                <h1 id="sobreTitle">Sobre</h1>
                <p id="textoSobre">
                    Dormir mal parece ser um dos males da vida moderna. Só nos Estados Unidos,
                    cerca de 70 milhões de pessoas sofrem com noites mal dormidas, sendo que 60% delas
                    apresentam algum problema crônico. Com isso, a preocupação com a qualidade do sono
                    vem ganhando destaque. Nesse sentido, a possibilidade de identificar a causa, em que
                    fase da noite ocorre e poder associá-lo a outros fatores, pode ser de grande ajuda no
                    tratamento do distúrbio do sono (insônia, apneia, privação crônica do sono,
                    sonambulismo, bruxismo, síndrome dos movimentos periódicos dos membros). 
                </p>
                <h3>Autores</h3>
                <p>
                    Anderson de Alencar <br />
                    Djeysi Alves        <br />
                    Uendel Couto
                </p>
            </div>
        </div>
        );
    }
}

export default Sobre;