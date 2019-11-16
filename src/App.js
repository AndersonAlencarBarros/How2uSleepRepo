import React, { Component } from 'react';
import './App.css';
import Chart from './Charts/Chart';
import MenuBar from './Menu/MenuBar';
import Form from './Form/Form';
import EmailForm from './Form/EmailForm';
import html2canvas from "html2canvas";
import axios from 'axios';
// import jsPDF from "jspdf";

var Tempo = [1,2,3,4,5,6,7,8,9,10,11];
var BatimentosCardiacos = [1,20,3,50,100,50,7,80,10,40,120];
var EsforcoRespiratorio = [1,20,3,50,100,50,7,80,10,40,120];
var SaturacaoOxigenio = [];
var FluxoNasal = [];
var Ruido = [];

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

  componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/users').then(result => {
        console.log(result)
          this.setState({ mydata: result.data});
      });
  }

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
            fill: false,
            borderColor: "#ac0000",
            backgroundColor:[
              'rgb(172, 0, 0)'
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
            fill: false,
            borderColor: "#ac0000",
            backgroundColor:[
              'rgb(172, 0, 0)'
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
            fill: false,
            borderColor: "#ac0000",
            backgroundColor:[
              'rgb(172, 0, 0)'
            ]
          }
        ]
      },
      chartData5:{
        labels: Tempo,
        datasets:[
          {
            label:'Ronco',
            data: Ruido,
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

  demoFromHTML() {
    const pdfConverter = require("jspdf");
    let input = window.document.getElementsByClassName("divPrint")[0];
    html2canvas(input)
      .then(canvas => {
        console.log(canvas);
        const imgData = canvas.toDataURL("image/png");
        const pdf = new pdfConverter("l", "pt");
        pdf.addImage(imgData, "JPEG", 50, 100, 800,400); // eixo x e y, largura e altura
        // pdf.save("BatimentosCardiacos.pdf");
        pdf.output('dataurlnewwindow');
      })
      .catch(err => console.log(err.message));
  }



  render() {
    return (
      <div className="App">
        <MenuBar />
        <hr style={{color:"#ac0000"}}></hr>
        <div className="divPrint" style={{width:1000, height: 400, margin: "auto"}} >
          <Chart chartData={this.state.chartData1} title="Batimentos Cardíacos"  />

          <button className="pdfButton" onClick={() => console.log("ici") || this.demoFromHTML()}>
              Download em PDF
            </button>
        </div>

        <div style={{width:1000, height: 400, margin: "auto"}}>
          <Chart chartData={this.state.chartData2} title="Esforço Respiratório"   />
        </div>

        <div style={{width:1000, height: 400, margin: "auto"}}>
          <Chart chartData={this.state.chartData3} title="Saturação de Oxigênio" />
        </div>

        <div style={{width:1000, height: 400, margin: "auto"}}>
          <Chart chartData={this.state.chartData4} title="Fluxo Nasal"  />
        </div>

        <div style={{width:1000, height: 400, margin: "auto"}}>
            <Chart chartData={this.state.chartData5} title="Ruído"  />
        </div>

        <div>
          <Form />
        </div>

        <div style={{width:1000, height: 400, margin: "auto"}}>
          <EmailForm />
        </div>

        <div>
            <ul>
                {this.state.mydata.map(person => <li>{person.email}</li>)}
            </ul>
        </div>

      </div>
    );
  }
}

export default App;
