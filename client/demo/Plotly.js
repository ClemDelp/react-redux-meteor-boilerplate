// MODULE

import React from 'react'

// COMPONENT
export default class PlotlyChart extends React.Component {
  constructor (props) {
    super(props)
  }

  // first time
  componentDidMount () {
    const y = this.props.y
    var trace = {
      name: 'data',
      x: this.props.x,
      y: y,
      type: 'scatter',
      opacity: 0.75,
      marker: {color: this.props.color}
    }
    var data = [trace]
    var layout = {
      title: this.props.name,
      showlegend: true,
      xaxis: {
        autorange: true
      },
      yaxis: {
        autorange: true
      }
    }
    if (this.props.type) {
      layout.xaxis.type = this.props.type
      layout.yaxis.type = this.props.type
    }
    Plotly.newPlot(this.refs.graphViz, data, layout)
  }

  range (start, end) {
    var foo = []
    for (var i = start; i < end; i++) {
      foo.push(i)
    }
    return foo
  }
  // after first time
  componentDidUpdate () {
    console.log('props',this.props)
    const index = this.props.y.length
    const x = this.props.x[index-1]
    const y = this.props.y[index-1]
    this.refs.graphViz.data[0].x.push(x)
    this.refs.graphViz.data[0].y.push(y)
    Plotly.redraw(this.refs.graphViz)
  }
  
  render () {
    return (
      <div ref='graphViz'></div>
    )
  }
}
