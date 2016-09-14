//
// IMPORTS
//
import React from 'react'
import { connect } from 'react-redux'

//
// COMPONENT
//
const ScoreStream = ({score}) => {
  return (
    <ul>
      {
        score.map((score, index) => {
          return (
            <li key={index}>{score.y} - {score.date}</li>
          )
        })
      }
    </ul>
  )
}

//
// CONNECT
//

function mapStateToProps ({demo: {score}}) {
  return {score}
}

export default connect(mapStateToProps, null)(ScoreStream)
