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
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" render={() => <Redirect to="/dashboard/company"/>}/>
            <Route path="/dashboard" component={Dashboard}/>
            {/* <Route exact path="/dashboard/company" component={Company} />
            <Route exact path="/dashboard/company/new" component={NewCompany} />
            <Route exact path="/dashboard/jobs" component={PostedJobs} />
            <Route exact path="/dashboard/job/new" component={NewJob} /> */}
          </div>
        </BrowserRouter>
      </div>
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
