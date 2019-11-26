import React, { Component } from 'react';
import './App.css';
import Chart from './Charts/Chart';
import MenuBar from './Menu/MenuBar';
import Form from './Form/Form';

var Tempo = [1,2,3,4,5,6,7,8,9,10,11];
var BatimentosCardiacos = [1,20,3,50,100,50,7,80,10,40,120];
var EsforcoRespiratorio = [1,20,3,50,100,50,7,80,10,40,120];
var SaturacaoOxigenio = [1,20,3,50,100,50,7,80,10,40,120];
var FluxoNasal = [1,20,3,50,100,50,7,80,10,40,120];
var Ruido = [1,20,3,50,100,50,7,80,10,40,120];

const divStyle = {
    width: 900,
    height: 400,
    margin: "auto"
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData1:{},    // Batimentos Cardiacos
      chartData2:{},    // Esforco Respiratorio
      chartData3:{},    // Saturacao de Oxigenio
      chartData4:{},    // Fluxo Nasal
      chartData5:{},     // Ronco
      mydata: []
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  // componentDidMount(){
  //     // this.interval = setInterval(this.fetchNews, 1000); chamar dados da API a cada 1 seg
  //     axios.get('https://jsonplaceholder.typicode.com/users').then(result => {
  //       console.log(result)
  //         this.setState({ mydata: result.data});
  //     });
  // }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData1:{
        labels: Tempo,
        datasets:[
          {
            label:'Batimentos Cardíacos',
            data: BatimentosCardiacos,
            fill: true,
            borderColor: "#ac0000",
            backgroundColor:[
              'rgba(172, 0, 0,0.2)'
            ]
          }
        ]
      },
      chartData2:{
        labels: Tempo,
        datasets:[
          {
            label:'Esforço Respiratório',
            data: EsforcoRespiratorio,
            fill: true,
            borderColor: "#ac0000",
            backgroundColor:[
              'rgba(172, 0, 0,0.2)'
            ]
          }
        ]
      },
      chartData3:{
        labels: Tempo,
        datasets:[
          {
            label:'Saturação de Oxigênio',
            data: SaturacaoOxigenio,
            fill: true,
            borderColor: "#ac0000",
            backgroundColor:[
              'rgba(172, 0, 0,0.2)'
            ]
          }
        ]
      },
      chartData4:{
        labels: Tempo,
        datasets:[
          {
            label:'Fluxo Nasal',
            data: FluxoNasal,
            fill: true,
            borderColor: "#ac0000",
            backgroundColor:[
              'rgba(172, 0, 0,0.2)'
            ]
          }
        ]
      },
      chartData5:{
        labels: Tempo,
        datasets:[
          {
            label:'Ruído',
            data: Ruido,
            fill: true,
            borderColor: "#ac0000",
            backgroundColor:[
              'rgba(172, 0, 0,0.2)'
            ]
          }
        ]
      },
  });
  }

  render() {
    return (
      <div  className="App">
        <MenuBar />

        <ul className="menuBar">

        <li className="itemLeft">
        <div id="pdf" className="divPrint" style={divStyle} >
          <Chart chartData={this.state.chartData1} title="Batimentos Cardíacos"  />
        </div>
        </li>

        <li className="itemRight">
        <div className="divPrint1" style={divStyle}>
          <Chart chartData={this.state.chartData2} title="Esforço Respiratório"   />
        </div>
        </li>

        <li className="itemLeft">
        <div className="divPrint2" style={divStyle}>
          <Chart chartData={this.state.chartData3} title="Saturação de Oxigênio" />
        </div>
        </li>

        <li className="itemRight">
        <div className="divPrint3" style={divStyle}>
          <Chart chartData={this.state.chartData4} title="Fluxo Nasal"  />
        </div>
        </li>
        </ul>
        
        <div className="divPrint4" style={divStyle}>
            <Chart chartData={this.state.chartData5} title="Ruído"  />
        </div>

        <div className="divPrint5" style={divStyle}>
          <Form />
        </div>


      </div>
    );
  }
}

export default App;
