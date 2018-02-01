import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="ui vertical menu">
          <Link to="/dashboard/company" className="item">
            Company
          </Link>
          <Link to="/dashboard/jobs" className="item">
            Jobs
          </Link>
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
