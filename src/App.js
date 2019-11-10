import React, { Component } from 'react';
import logo from './logo512.png';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label:'Population',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" width="50px" height= "50px" />
          <h3 className="mainTitle">How2usleep</h3>
        </div>
        <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
      </div>
    );
  }
}

export default App;


// import React from 'react';
// import {Bar} from 'react-chartjs-2';
// import GraficoBarra from './components/GraficoBarra'
// import GraficoLinha from './components/GraficoLinha'
// import Chart from './components/Chart'

// class App extends React.Component {
//   render() {
//     return (
//       // <div>
//       //   <GraficoBarra />
//       // </div> 
//       <div>
//         <GraficoLinha name="Batimentos"/>
//         <GraficoLinha name="Ronco"/>
//       </div>
//     );
//   }
// }

// export default App


  // getChartData(){
  //   // Ajax calls here
  //   this.setState({
  //     chartData:{
  //       labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
  //       datasets:[
  //         {
  //           label:'Population',
  //           data:[
  //             617594,
  //             181045,
  //             153060,
  //             106519,
  //             105162,
  //             95072
  //           ],
  //           backgroundColor:[
  //             'rgba(255, 99, 132, 0.6)',
  //             'rgba(54, 162, 235, 0.6)',
  //             'rgba(255, 206, 86, 0.6)',
  //             'rgba(75, 192, 192, 0.6)',
  //             'rgba(153, 102, 255, 0.6)',
  //             'rgba(255, 159, 64, 0.6)',
  //             'rgba(255, 99, 132, 0.6)'
  //           ]
  //         }
  //       ]
  //     }
  //   });
  // }