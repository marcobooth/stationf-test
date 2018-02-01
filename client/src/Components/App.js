import React, { Component } from 'react'
import Header from './Header'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../actions'
import Dashboard from './Dashboard'
import Landing from './Landing'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
        <BrowserRouter>
          <div>
            <Header/>
            <div className="ui container">
              <Route exact path="/" component={Landing} />
              <Route exact path="/dashboard" render={() => <Redirect to="/dashboard/company"/>}/>
              <Route path="/dashboard" component={Dashboard}/>
            </div>
          </div>
        </BrowserRouter>
    )
  }
}

export default connect(null, actions)(App);

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     fakeAuth.isAuthenticated ? (
//       <Component {...props}/>
//     ) : (
//       <Redirect to={{
//         pathname: '/login',
//         state: { from: props.location }
//       }}/>
//     )
//   )}/>
// )
