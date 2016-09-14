//
// IMPORTS
//

import React from 'react'
import { connect } from 'react-redux'
import ScoreStream from './ScoreStream'
import PlotlyChart from './Plotly'
import {apiRequest} from '../utils/api'

//
// COMPONENT
//

const Demo = ({y, x}) => {
  return (
      <div style={{width: '100%'}}>
        <div className='row'>
          <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
            <p>Score Stream</p>
            <button onClick={() => {
              // test api route and stream connection
              apiRequest('/getScoreInRealTime')
            }}>Test the stream</button>
            <ScoreStream />
          </div>
          <div className='col-xs-9 col-sm-9 col-md-9 col-lg-9'>
            <PlotlyChart
              x={x}
              y={y}
              name='Score'
              type='log'
              color='#0000ff'
            />
          </div>
        </div>
      </div>
    )
}

//
// CONNECT
//

function mapStateToProps ({demo: {score}}) {
  const x = [0]
  if (score.length > 1) {
    for (let i = 1; i < score.length; i++) {
      x.push(i)
    }
  }
  const y = score.map((s) => s.y)
  return {y, x}
}

export default connect(
  mapStateToProps,
  null
)(Demo)
