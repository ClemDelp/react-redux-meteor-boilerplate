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
          <div style={styles.body} className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <h1>BODY</h1>
          </div>
          <div style={styles.body} className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <p>Hello Stream</p>
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
// EXPORT
//

export default connect()(Index)
