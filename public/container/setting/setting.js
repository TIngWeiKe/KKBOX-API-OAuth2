import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class setting extends Component {

  componentWillMount(){
    console.log(this.props.history);
    this.props.history.goBack()
  }


  render() {
    return (
      <div className="header">
      </div>
    )
  }
}


export default withRouter(setting)