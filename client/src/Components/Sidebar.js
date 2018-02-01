import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="ui vertical menu">
          <Link to="/dashboard/company" className="item">
            Company<i className="building icon"></i>
          </Link>
          <Link to="/dashboard/jobs" className="item">
            Posted Jobs<i className="users icon"></i>
          </Link>
          <a className="item">
            Notifications<i className="cloud icon"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default Sidebar
