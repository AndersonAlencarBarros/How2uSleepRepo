import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';
import MenuBar from './components/MenuBar';
import html2canvas from "html2canvas";
// import jsPDF from "jspdf";


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
        labels: [1,2,3,4,5,6,7,8,15,9,10],  // eixo X
        datasets:[
          {
            label:'Batimentos Cardíacos',
            data:[     // eixo Y
              1,
              20,
              3,
              100,
              50,
              10,
              100,
              20,
              50,
              125,
              75
            ],
            fill: true,
            borderColor: "#ac0000",
            backgroundColor:[
              'rgba(172, 0, 0,0.2)'
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
        <div className="divPrint" style={{width:1000, height: 400}} >
          <Chart chartData={this.state.chartData1} title="Batimentos Cardíacos"  />
        </div>

        <div>
        <button onClick={() => console.log("ici") || this.demoFromHTML()}>
            Download PDF
          </button>
        </div>

        <Chart chartData={this.state.chartData2} title="Esforço Respiratório"   />
        <Chart chartData={this.state.chartData3} title="Saturação de Oxigênio" />
        <Chart chartData={this.state.chartData4} title="Fluxo Nasal"  />
        <Chart chartData={this.state.chartData5} title="Ruído"  />

        
      </div>
    );
  }
}

export default App;