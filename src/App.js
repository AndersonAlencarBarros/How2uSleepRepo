import React, { Component } from 'react';
import './App.css';
import Chart from './Charts/Chart';
import MenuBar from './Menu/MenuBar';
import Form from './Form/Form';
// import EmailForm from './Form/EmailForm';
// import html2canvas from "html2canvas";
import axios from 'axios';
import * as jsPDF from "jspdf";
import domtoimage from 'dom-to-image';

var Tempo = [1,2,3,4,5,6,7,8,9,10,11];
var BatimentosCardiacos = [1,20,3,50,100,50,7,80,10,40,120];
var EsforcoRespiratorio = [1,20,3,50,100,50,7,80,10,40,120];
var SaturacaoOxigenio = [1,20,3,50,100,50,7,80,10,40,120];
var FluxoNasal = [1,20,3,50,100,50,7,80,10,40,120];
var Ruido = [1,20,3,50,100,50,7,80,10,40,120];

const divStyle = {
    width:1000,
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

  componentDidMount(){
      // this.interval = setInterval(this.fetchNews, 1000); chamar dados da API a cada 1 seg
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
            label:'Ronco',
            data: Ruido,
            fill: true,
            borderColor: "#ac0000",
            backgroundColor:[
              'rgba(172, 0, 0,0.2)'
            ]
          }
        ]
      },
  }); //fim do setState()
  }

  demoFromHTML(){
     // Propriedades
    var doc = new jsPDF("l", "pt");
    const options = { background: 'white', height: 500, width: 1500 };
    var img = new Image();
    doc.setProperties({
    	title: 'Relatório do Sono',
    	subject: 'Relatório do Sono',
    	author: 'How2uSleep',
    	keywords: 'apneia,hipopneia,sono'
    })
    doc.setTextColor("#ac0000");

    // Título
    doc.setFontSize(32);
    doc.text(20, 30, 'Relatório do Sono');
    doc.setDrawColor("#ac0000");
    doc.setLineWidth(1.5);
    doc.line(20, 35, 700, 35);
    doc.addPage();
    doc.setFontSize(16);

    // Batimentos Cardíacos
    doc.text(20, 20, 'Batimentos Cardíacos');
    var node = document.getElementsByClassName('divPrint')[0];
    domtoimage.toPng(node,options)
    .then(function (dataUrl) {
        img.src = dataUrl;
        doc.addImage(img, "JPEG", 0, 150, 700, 400);
        doc.addPage();
        // Esforco Respiratorio
        doc.text(20, 20, 'Esforço Respiratório');
        var node = document.getElementsByClassName('divPrint1')[0];
        domtoimage.toPng(node,options)
        .then(function (dataUrl) {
            img.src = dataUrl;
            doc.addImage(img, "JPEG", 0, 150, 700, 400);
            doc.addPage();
            // Saturação de Oxigênio
            doc.text(20, 20, 'Saturação de Oxigênio');
            var node = document.getElementsByClassName('divPrint2')[0];
            domtoimage.toPng(node,options)
            .then(function (dataUrl) {
                img.src = dataUrl;
                doc.addImage(img, "JPEG", 0, 150, 700, 400);
                doc.addPage();
                // Fluxo Nasal
                doc.text(20, 20, 'Fluxo Nasal');
                var node = document.getElementsByClassName('divPrint3')[0];
                domtoimage.toPng(node,options)
                .then(function (dataUrl) {
                    img.src = dataUrl;
                    doc.addImage(img, "JPEG", 0, 150, 700, 400);
                    doc.addPage();
                    // Ruido
                    doc.text(20, 20, 'Ruído');
                    var node = document.getElementsByClassName('divPrint4')[0];
                    domtoimage.toPng(node,options)
                    .then(function (dataUrl) {
                        img.src = dataUrl;
                        doc.addImage(img, "JPEG", 0, 150, 700, 400);
                        doc.output('dataurlnewwindow');
                    })
                })
            })
        })
    })




}


  render() {
    return (
      <div  className="App">
        <MenuBar />
        <hr style={{color:"#ac0000"}}></hr>

        <div id="pdf" className="divPrint" style={divStyle} >
          <Chart chartData={this.state.chartData1} title="Batimentos Cardíacos"  />
        </div>

        <div className="divPrint1" style={divStyle}>
          <Chart chartData={this.state.chartData2} title="Esforço Respiratório"   />
        </div>

        <div className="divPrint2" style={divStyle}>
          <Chart chartData={this.state.chartData3} title="Saturação de Oxigênio" />
        </div>

        <div className="divPrint3" style={divStyle}>
          <Chart chartData={this.state.chartData4} title="Fluxo Nasal"  />
        </div>

        <div className="divPrint4" style={divStyle}>
            <Chart chartData={this.state.chartData5} title="Ruído"  />
        </div>

        <div className="divPrint5" style={divStyle}>
          <Form />
        </div>

        <div id="BotaoRelatorio">
            <button className="pdfButton" onClick={() => console.log("ici") || this.demoFromHTML()}>
                Relatório
              </button>
        </div>

        <div style={divStyle}>
            <h5>AJAX Example</h5>
            <ul>
                {this.state.mydata.map(person => <li key={person.id}>{person.name}</li>)}
            </ul>
        </div>

      </div>
    );
  }
}

export default App;


// const pdfConverter = require("jspdf");
// let input = window.document.getElementsByClassName("divPrint")[0];
// html2canvas(input)
//   .then(canvas => {
//     console.log(canvas);
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new pdfConverter("l", "pt");
//     pdf.addImage(imgData, "JPEG", 50, 50, 300, 150); // eixo x e y, largura e altura
//     // pdf.save("BatimentosCardiacos.pdf");
//     pdf.output('dataurlnewwindow');
//   })
//   .catch(err => console.log(err.message));

// var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
//   window.location.href=image;

// https://mrrio.github.io/
// https://www.npmjs.com/package/jspdf
// https://github.com/MrRio/jsPDF
