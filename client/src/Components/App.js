import React, { Component } from 'react'
import Header from './Header'
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../actions'

const Landing = () => <h2>Landing</h2>
const Dashboard = () => <h2>Dashboard</h2>

class App extends Component {
  componentDidMount() {
    console.log("in this function")
    this.props.fetchUser()
    this.props.something()
  }

  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App);
