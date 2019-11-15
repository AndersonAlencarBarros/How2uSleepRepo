import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  // 'defaultProps define uma propriedade padrao
  // caso nao seja especificado nenhuma quando passado
  // e será sobreescrito caso algum seja passado
  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'bottom'
  }

  render(){
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          height={400}
          width={10}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            title:{
              display:this.props.displayTitle,
              text: this.props.title,
              fontSize:20,
              fontColor: "#ac0000"
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            },
            layout: {
              padding: {
                  top: 5,
                  left: 15,
                  right: 15,
                  bottom: 15
              }
          }
          }}
        />
      </div>
    )
  }
}

export default Chart;
