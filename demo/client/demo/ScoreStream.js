//
// IMPORTS
//
import React from 'react'
import { connect } from 'react-redux'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

//
// COMPONENT
//
const ScoreStream = ({_score}) => {
  return (
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Score</TableHeaderColumn>
          <TableHeaderColumn>Time</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
      {
        _score.map((s, index) => {
          return (
            <TableRow key={index}>
              <TableRowColumn><strong>{s.y}</strong></TableRowColumn>
              <TableRowColumn>{s.date}</TableRowColumn>
            </TableRow>
          )
        })
      }
      </TableBody>
    </Table>
  )
}

//
// CONNECT
//

function mapStateToProps ({demo: {score}}) {
  const _score = score.reverse()
  return {_score}
}

export default connect(mapStateToProps, null)(ScoreStream)
