import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {
  loggedIn() {
    if (this.props.auth) {
      return (
        <div className="right menu">
          <div className="item"><Link to="/dashboard">Dashboard</Link></div>
          <div className="item"><a href="/auth/logout">Logout</a></div>
        </div>
      )
    } else {
      return (
        <div className="right menu">
          <div className="item"><a href="/auth/google" className="ui button">Log In</a></div>
          <div className="item"><a href="/auth/google" className="ui button">Sign Up</a></div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="ui large top menu">
        <div className="ui container">
          <Link to="" className="active item">Home</Link>
          <a className="item">About</a>
          <a className="item">Something Else</a>
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
