import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';
import MenuBar from './components/MenuBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData1:{},    // Batimentos Cardiacos
      chartData2:{},    // Esforco Respiratorio
      chartData3:{},    // Saturacao de Oxigenio
      chartData4:{},    // Fluxo Nasal
      chartData5:{}     // Ronco
    }
  }

  componentWillMount(){
    // Ajax calls here
    this.setState({
      chartData1:{
        labels: ['Unidade de Medida'],
        datasets:[
          {
            label:'Batimentos Cardíacos',
            data:[
              1,
              2,
              3,
            ],
            fill: false,
            borderColor: "#ac0000",
            backgroundColor:[
              'rgb(172, 0, 0)'
            ]
          }
        ]
      },
      chartData2:{
        labels: ['Unidade de Medida'],
        datasets:[
          {
            label:'Esforço Respiratório',
            data:[
              1,
              2,
              3,
            ],
            fill: false,
            borderColor: "#ac0000",
            backgroundColor:[
              'rgb(172, 0, 0)'
            ]
          }
        ]
      },
      chartData3:{
        labels: ['Unidade de Medida'],
        datasets:[
          {
            label:'Saturação de Oxigênio',
            data:[
              1,
              2,
              3,
            ],
            fill: false,
            borderColor: "#ac0000",
            backgroundColor:[
              'rgb(172, 0, 0)'
            ]
          }
        ]
      },
      chartData4:{
        labels: ['Unidade de Medida'],
        datasets:[
          {
            label:'Fluxo Nasal',
            data:[
              1,
              2,
              3,
            ],
            fill: false,
            borderColor: "#ac0000",
            backgroundColor:[
              'rgb(172, 0, 0)'
            ]
          }
        ]
      },
      chartData5:{
        labels: ['Unidade de Medida'],
        datasets:[
          {
            label:'Ronco',
            data:[
              1,
              2,
              3,
            ],
            fill: false,
            borderColor: "#ac0000",
            backgroundColor:[
              'rgb(172, 0, 0)'
            ]
          }
        ]
      },
    });
  }
  
  render() {
    return (
      <div className="App">
        <MenuBar />
        <Chart chartData={this.state.chartData1} title="Batimentos Cardíacos"  />
        <Chart chartData={this.state.chartData2} title="Esforço Respiratório"   />
        <Chart chartData={this.state.chartData3} title="Saturação de Oxigênio" />
        <Chart chartData={this.state.chartData4} title="Fluxo Nasal"  />
        <Chart chartData={this.state.chartData5} title="Ronco"  />
      </div>
    );
  }
}

export default App;