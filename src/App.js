import React from 'react';
import {Bar} from 'react-chartjs-2';
import GraficoBarra from './components/GraficoBarra'
import GraficoLinha from './components/GraficoLinha'
import Chart from './components/Chart'

class App extends React.Component {
  render() {
    return (
      // <div>
      //   <GraficoBarra />
      // </div> 
      <div>
        <GraficoLinha name="Batimentos"/>
        <GraficoLinha name="Ronco"/>
      </div>
    );
  }
}

export default App