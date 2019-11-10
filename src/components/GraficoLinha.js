import React from 'react';
import {Line} from 'react-chartjs-2';

const state = {
  labels: ['Tempo'],
  datasets: [
    {
      label: 'Frequência Cardíaca',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

class GraficoLinha extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          width={20}
          height={250}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            title:{
              display:true,
              text:'Batimentos Cardíados',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
            layout: {
            padding: {
                left: 50,
                right: 50,
                top: 10,
                bottom: 0
            }
        }
          }}
        />
      </div>
    );
  }
}

export default GraficoLinha