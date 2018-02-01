import React from 'react'
import { Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import Company from './Company'
import PostedJobs from './PostedJobs'
import NewCompany from './NewCompany'
import NewJob from './NewJob'

function Dashboard(props) {
  return(
    <div>
      <div className="left floated three wide column">
        <Sidebar />
      </div>
      <div className="thirteen wide column">
        <Route exact path="/dashboard/company" component={Company}/>
        <Route exact path="/dashboard/company/new" component={NewCompany}/>
        <Route exact path="/dashboard/jobs" component={PostedJobs}/>
        <Route exact path="/dashboard/job/new" component={NewJob}/>
      </div>
    </div>
  )
}

export default Dashboard
