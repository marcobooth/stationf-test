import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {
  loggedIn() {
    if (this.props.auth) {
      return (
        <div className="right menu">
          <Link to="/dashboard" className="item">Dashboard</Link>
          <a href="/api/logout" className="ui item">Logout</a>
        </div>
      )
    } else {
      return (
        <div className="right menu">
          <a href="/auth/google" className="ui button">Log In</a>
          <a href="/auth/google" className="ui button">Sign Up</a>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui large secondary pointing menu">
          <Link to="" className="active item">Home</Link>
          {this.loggedIn()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log("state.auth", state.auth)
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Header)
