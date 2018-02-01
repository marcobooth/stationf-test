import React, { Component } from 'react'
import Header from './Header'
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../actions'
import Dashboard from './Dashboard'
import NewCompany from './NewCompany'
import NewJob from './NewJob'
import Landing from './Landing'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/company/new" component={NewCompany} />
            <Route exact path="/dashboard/job/new" component={NewJob} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

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

export default connect(null, actions)(App);
