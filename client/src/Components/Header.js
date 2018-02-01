import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {
  loggedIn() {
    if (this.props.auth) {
      return (
        <div className="right menu">
          <Link className="item" to="/dashboard">Dashboard</Link>
          <a className="item" href="/auth/logout">Logout</a>
        </div>
      )
    } else {
      return (
        <div className="right menu">
          <a className="item" href="/auth/google">Log in</a>
          <a className="item" href="/auth/google">Sign Up</a>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="ui large top menu">
        <div className="ui container">
          <Link to="" className="active item">Home</Link>
          <a className="item">Companies</a>
          <a className="item">About</a>
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
