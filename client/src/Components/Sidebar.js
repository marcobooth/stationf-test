import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="ui vertical menu">
          <a className="item" onClick={() => this.props.changeMenuItem(0)}>
            Company
          </a>
          <a className="item" onClick={() => this.props.changeMenuItem(1)}>
            Jobs
          </a>
          {/* <Link to="/dashboard/jobs" className="item">
            Jobs
          </Link> */}
          <a className="item">
            Notifications
          </a>
        </div>
      </div>
    )
  }
}

export default Sidebar
