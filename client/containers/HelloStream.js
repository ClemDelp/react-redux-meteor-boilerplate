//
// IMPORTS
//
import React from 'react'
import { connect } from 'react-redux'

//
// COMPONENT
//
const HelloStream = ({hellos}) => {
  return (
    <ul>
      {
        hellos.map((hello, index) => {
          return (
            <li key={index}>{hello}</li>
          )
        })
      }
    </ul>
  )
}

//
// CONNECT
//
function mapStateToProps ({appReducer: {hellos}}) {
  console.log(hellos)
  return {hellos}
}
export default connect(mapStateToProps, null)(HelloStream)
