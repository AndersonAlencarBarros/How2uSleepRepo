import React, {Component} from 'react';
import logo from './logo512.png';
import * as jsPDF from "jspdf";
import domtoimage from 'dom-to-image';
import './Menu.css';
import { Link } from 'react-router-dom'

class MenuBar extends Component{

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
                          // doc.output('dataurlnewwindow');
                          doc.save("Relatorio.pdf");
                      })
                  })
              })
          })
      })
    }

    render(){
        return(
            <div className="App-header">
                <ul className="menuBar">
                <Link to="/"><li className="itemLeft"><img src={logo} className="App-logo" alt="logo" /></li></Link>
                <li className="itemLeft"><h3 className="mainTitle">How2uSleep</h3></li>
                 <li className="itemRight">
                    <Link to="/Sobre"><button>Sobre</button></Link>
                 </li>
                 <li className="itemRight">
                     <button className="Sobre" onClick={() => console.log("Relatorio") || this.demoFromHTML()}>
                         Relatório
                       </button>
                 </li>
                </ul>
            </div>
        );
    }
}

export default MenuBar
