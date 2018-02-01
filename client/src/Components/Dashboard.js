import React, { Component } from 'react'
import Company from './Company'
import PostedJobs from './PostedJobs'
import Sidebar from './Sidebar'
import { Route } from 'react-router-dom'

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuItem: 0
    }
  }

  changeMenuItem(item) {
    this.setState({
      menuItem: item
    })
  }

  render() {
    console.log("dashboard props: ", this.props)
    return(
      <div>
        <div className="left floated three wide column">
          <Sidebar changeMenuItem={this.changeMenuItem.bind(this)} />
        </div>
        <div className="thirteen wide column">
          { this.state.menuItem === 0 ? <Company /> : <PostedJobs />}
        </div>
      </div>
    )
  }
}

export default Dashboard
