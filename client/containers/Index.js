//
// IMPORTS
//

import React from 'react'
import { connect } from 'react-redux'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HelloStream from './HelloStream'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import {apiRequest} from '../utils/api'

//
// COMPONENT
//

const Index = () => {
  const styles = {
    header: {
      height: '10vh'
    },
    body: {
      height: '85vh'
    },
    footer: {
      height: '5vh'
    }
  }
  return (
    <MuiThemeProvider>
      <div>
        <div className='row'>
          <div style={styles.header} className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <Header />
          </div>
        </div>
        <div className='row'>
          <div style={styles.body} className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
            <h1>BODY</h1>
          </div>
          <div style={styles.body} className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
            <p>Hello Stream</p>
            <button onClick={() => {
              // test api route and stream connection
              apiRequest('/hello')
            }}>Test the stream</button>
            <HelloStream />
          </div>
        </div>
        <div className='row'>
          <div style={styles.footer} className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <Footer />
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  )
}

//
// CONNECT
//

function mapStateToProps ({data: {hellos}}) {
  return {hellos}
}

export default connect(
  mapStateToProps,
  null
)(Index)
