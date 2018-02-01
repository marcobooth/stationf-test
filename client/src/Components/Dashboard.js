import React, { Component } from 'react'
import Company from './Company'
import PostedJobs from './PostedJobs'
import Sidebar from './Sidebar'
import { Route } from 'react-router-dom'
import NewCompany from './NewCompany'
import NewJob from './NewJob'

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    console.log("dashboard props: ", this.props)
    return(
      <div>
        <div className="left floated three wide column">
          <Sidebar />
        </div>
        <div className="thirteen wide column">
          <Route exact path="/dashboard/company" component={Company}/>
          <Route path="/dashboard/company/new" component={NewCompany}/>
          <Route exact path="/dashboard/jobs" component={PostedJobs}/>
          <Route path="/dashboard/job/new" component={NewJob}/>
        </div>
      </div>
    )
  }
}

export default Dashboard
